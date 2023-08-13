'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TDBImg } from '@/types/types';

type Props = {
    images: TDBImg[];
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

export const ImageSlider = ({ images }: Props) => {
    const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        console.log({ page });
        console.log({ direction });
    }, [page]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.

    const wrap = (min: number, max: number, v: number) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    const imageIndex = wrap(0, images?.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex].img_url ?? ''}
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
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute mt-20 mx-auto max-h-[80%] mb-24 left-0 right-0 sm:w-4/5 md:w-3/4 xl:w-3/5 sm:mt-24 object-contain"
                />
            </AnimatePresence>
            <div className="absolute text-white top-1/2" onClick={() => paginate(1)}>
                left
            </div>
            <div className="absolute text-white top-1/2 right-0" onClick={() => paginate(-1)}>
                right
            </div>
        </>
    );
};
