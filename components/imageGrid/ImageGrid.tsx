'use client';

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
        <section className="flex w-5/6">
            <div className="flex-1 mt-16 grid gap-4 grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 border p-4">
                {imgData &&
                    imgData.map(
                        (image, i) =>
                            image && (
                                <div key={image.id}>
                                    <figure
                                        onClick={() => {
                                            setShowModal(true);
                                            setCurrentImgIndex(i);
                                        }}
                                        className="relative pt-[100%] duration-200 transition-all ease-in hover:cursor-pointer hover:scale-105"
                                    >
                                        <Image
                                            src={image.img_url ?? ''}
                                            alt={`${image.id}-${image.img_url}`}
                                            fill
                                            sizes="(min-width: 1040px) calc(20.82vw - 11px), (min-width: 640px) calc(27.89vw - 12px), 83.44vw"
                                            className="flex items-center object-cover"
                                        />
                                    </figure>
                                </div>
                            ),
                    )}
            </div>

            <Modal visible={showModal} setVisible={setShowModal} onlyBackdrop>
                <ImageSlider images={imgData} currentImgIndex={currentImgIndex} />
            </Modal>
        </section>
    );
};
