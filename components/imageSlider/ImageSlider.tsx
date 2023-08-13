'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TDBImg } from '@/types/types';

type Props = {
    images: TDBImg[];
    currentImgIndex: number;
};

export const ImageSlider = ({ images, currentImgIndex }: Props) => {
    const [[page, direction], setPage] = useState<[number, number]>([currentImgIndex, 0]);

    const handleNext = () => {
        if (page === images.length - 1) {
            setPage([0, 1]);
        } else {
            setPage([page + 1, 1]);
        }
    };

    const handlePrevious = () => {
        if (page === 0) {
            setPage([images.length - 1, -1]);
        } else {
            setPage([page - 1, -1]);
        }
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[page].img_url ?? ''}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { damping: 30, opacity: { duration: 0.2 }, stiffness: 300, type: 'spring' },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                            handlePrevious();
                        }
                    }}
                    className="absolute mt-20 mx-auto max-h-[80%] mb-24 left-0 right-0 sm:w-4/5 md:w-3/4 xl:w-3/5 sm:mt-24 object-contain"
                />
            </AnimatePresence>
            <div className="absolute text-white top-1/2 z-20" onClick={handleNext}>
                left
            </div>
            <div className="absolute text-white top-1/2 z-20" onClick={handlePrevious}>
                right
            </div>
        </>
    );
};

const variants = {
    center: {
        opacity: 1,
        x: 0,
        zIndex: 1,
    },
    enter: (direction: number) => {
        return {
            opacity: 0,
            x: direction > 0 ? 1000 : -1000,
        };
    },
    exit: (direction: number) => {
        return {
            opacity: 0,
            x: direction < 0 ? 1000 : -1000,
            zIndex: 0,
        };
    },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};
