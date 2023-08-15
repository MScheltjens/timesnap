'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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

    // TODO: make reusable for grid

    return (
        <div className="relative w-full sm:w-5/6 sm:h-5/6 lg:w-4/6 xl:w-3/6 h-4/6 mx-auto mt-24">
            <AnimatePresence initial={false} custom={direction}>
                <motion.figure
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { damping: 30, opacity: { duration: 0.2 }, stiffness: 300, type: 'spring' },
                    }}
                    className="absolute left-0 top-0 w-full h-full"
                >
                    <figure className="absolute w-full h-full">
                        {/* TODO: add placeholders for imgs */}
                        <Image src={images[page].img_url ?? ''} fill alt={images[page].img_url ?? ''} className="object-contain" />
                    </figure>
                </motion.figure>
            </AnimatePresence>
            {/* TODO: make btn component */}
            <div className="absolute text-white top-[40%] left-24 z-20" onClick={handleNext}>
                left
            </div>
            <div className="absolute text-white top-[40%] z-20 right-24" onClick={handlePrevious}>
                right
            </div>
        </div>
    );
};
