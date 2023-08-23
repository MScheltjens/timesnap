'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageSlider } from '../imageSlider/ImageSlider';
import { Modal } from '../modal/Modal';
import { TDBImg } from '@/types/types';

type Props = {
    imgData: TDBImg[];
};

export const ImageGrid = ({ imgData }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

    return (
        <>
            <section className="grid gap-4 grid-cols-2 sm:grid-cols-5 lg:grid-cols-6">
                {imgData &&
                    imgData.map(
                        (image, i) =>
                            image && (
                                // this div to make the 4:3 with the padding in the shild, like a wrapper
                                <motion.div
                                    key={image.id}
                                    onClick={() => {
                                        setShowModal(true);
                                        setCurrentImgIndex(i);
                                    }}
                                >
                                    <figure className="relative pt-[100%] duration-200 transition-all ease-in hover:cursor-pointer hover:scale-105">
                                        <Image
                                            src={image.img_url ?? ''}
                                            alt={`${image.id}-${image.img_url}`}
                                            fill
                                            sizes="(min-width: 1040px) calc(20.82vw - 11px), (min-width: 640px) calc(27.89vw - 12px), 83.44vw"
                                            className="flex items-center object-cover"
                                            priority
                                        />
                                    </figure>
                                </motion.div>
                            ),
                    )}
            </section>

            <Modal visible={showModal} setVisible={setShowModal}>
                <ImageSlider images={imgData} currentImgIndex={currentImgIndex} />
            </Modal>
        </>
    );
};
