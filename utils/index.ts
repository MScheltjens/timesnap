import mixedArt from '../public/backgrounds/mixed-art.jpg';
import photography from '../public/backgrounds/photography.jpg';
import { TImgBackGround } from '@/types';

export * from './send-email';
export * from './supabaseClient';

// get array of all the page backgrounds
export const backgrounds: TImgBackGround[] = [
    { imgData: photography, title: 'photography' },
    { imgData: mixedArt, title: 'mixed-art' },
];

//format the page title for the href
export const formatToHref = (title: string | undefined): string => {
    if (title) return title.replace(' ', '-').toLowerCase();
    return '';
};
