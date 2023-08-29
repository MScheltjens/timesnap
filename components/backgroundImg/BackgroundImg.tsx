'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { TImgBackGround } from '@/types/types';
import { formatToHref } from '@/utils';

type Props = {
    backgrounds: TImgBackGround[];
};

export const BackgroundImg = ({ backgrounds }: Props) => {
    const currentPath = usePathname();
    const formattedPath = formatToHref(currentPath).slice(1);
    const background = backgrounds.find((background) => background.title === formattedPath)?.imgData;

    return <Image alt="background" src={background!} fill className="top-96" />;
};
