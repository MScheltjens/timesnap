'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ImageInfo } from '../imageInfo/ImageInfo';

type Props = {
    images: StaticImageData[];
    currentImgIndex: number;
};

export const ImageSlider = ({ images, currentImgIndex }: Props) => {
    const [[page, direction], setPage] = useState<[number, number]>([currentImgIndex, 0]);

    const handleNext = useCallback(() => {
        if (page === images.length - 1) {
            setPage([0, 1]);
        } else {
            setPage([page + 1, 1]);
        }
    }, [page, images.length]);

    const handlePrevious = useCallback(() => {
        if (page === 0) {
            setPage([images.length - 1, -1]);
        } else {
            setPage([page - 1, -1]);
        }
    }, [page, images.length]);

    // TODO: not DRY -> onKeydown aand the useEffect are also in the modal component -> make a custom hook?

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrevious();
            }
        },
        [handleNext, handlePrevious],
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.figure
                    key={images[page].src}
                    custom={direction}
                    variants={sliderVariants}
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
                    className="absolute m-auto inset-0 w-full mt-28"
                >
                    <Image src={images[page].src} alt={'no.' + images[page].src} fill sizes="w-full" className="object-contain relative" />
                    <ImageInfo />
                </motion.figure>

                <button key="leftArrow" className="absolute text-gray-300 top-1/2 -left-20 z-20 hidden sm:block" onClick={handleNext}>
                    <ChevronLeftIcon className={`h-16 w-16 hover:cursor-pointer hover:animate-ping opacity-70`} />
                </button>

                <button key="rightArrow" className="absolute text-gray-300 top-1/2 z-20 -right-20 hidden sm:block" onClick={handlePrevious}>
                    <ChevronRightIcon className={`w-16 hover:cursor-pointer hover:animate-ping opacity-70`} />
                </button>
            </AnimatePresence>
        </>
    );
};

const sliderVariants: Variants = {
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
