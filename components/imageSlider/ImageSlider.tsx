'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TDBImg } from '@/types/types';

type Props = {
    images: TDBImg[];
    currentImgIndex: number;
};

export const ImageSlider = ({ images, currentImgIndex }: Props) => {
    const [[page, direction], setPage] = useState<[number, number]>([currentImgIndex, 0]);
    const pathname = usePathname();

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
                <motion.div
                    key={page}
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
                    className="absolute mx-auto inset-0"
                >
                    <Image src={images[page].img_url ?? ''} alt="" fill sizes="w-full" className="object-contain" />
                </motion.div>
            </AnimatePresence>
            <div className="absolute text-white top-[40%] left-24 z-20" onClick={handleNext}>
                left
            </div>
            <div className="absolute text-white top-[40%] z-20 right-24" onClick={handlePrevious}>
                right
            </div>
            <Link href={`${pathname}/${images[page].id}`} className="absolute text-white">
                TO PAGE
            </Link>
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
        console.log('enter', direction);
        return {
            opacity: 0,
            x: direction > 0 ? 1000 : -1000,
        };
    },
    exit: (direction: number) => {
        console.log('exit', direction);
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
