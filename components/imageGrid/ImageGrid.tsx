'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Modal } from '../modal/Modal';
import { TDBImg } from '@/types/types';

export const ImageGrid = ({ imgData }: { imgData: TDBImg[] }) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <section className="flex justify-center items-center relative">
                <div className="my-24 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-8 md:gap-4 lg:grid-cols-3">
                    {imgData &&
                        imgData.map(
                            (image) =>
                                image && (
                                    <figure
                                        key={image.id}
                                        onClick={() => setShowModal(true)}
                                        className="relative h-72 w-72 opacity-100 duration-200 transition-all ease-in hover:cursor-pointer hover:scale-105"
                                    >
                                        <Image
                                            src={image.img_url ?? ''}
                                            alt={`${image.id}-${image.img_url}`}
                                            fill
                                            sizes="100%"
                                            className="flex items-center object-cover"
                                        />
                                    </figure>
                                ),
                        )}
                </div>
            </section>
            <Modal visible={showModal} setVisible={setShowModal}>
                <div className="bg-white">carrousel</div>
            </Modal>
        </>
    );
};
