'use client';

import Image from 'next/image';
import { TDBImg } from '@/types/types';

type Props = {
    imgData: TDBImg[];
};

export const ImageSlider = ({ imgData }: Props) => {
    if (imgData)
        return (
            <div className="flex h- bg-blue-50">
                <div className="relative w-1/2 h-1/2">
                    <Image src={imgData[0].img_url ?? ''} alt={imgData[0].img_url ?? ''} fill />
                    <button>left</button>
                    <button>right</button>
                </div>
            </div>
        );
};
