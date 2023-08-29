import { StaticImageData } from 'next/image';
import { Database } from '@/types/supabase.types';

export enum EWork {
    MIXED_ART = 'mixed-art',
    PHOTOGRAPHY = 'photography',
}
export type TDBError = {
    code: string;
    details: null;
    hint: null;
    message: string;
};
export type TDBImg = Database['public']['Tables']['mixed-art']['Row'] | Database['public']['Tables']['photography']['Row'];

export type TImgBackGround = {
    title: string;
    imgData: StaticImageData;
};

export type TWork = 'mixed-art' | 'photography';
