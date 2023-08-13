import { StaticImageData } from 'next/image';
import { Database } from '@/lib/supabase.types';

export type TImgBackGround = {
    title: string;
    imgData: StaticImageData;
};

export type TDBImg = Database['public']['Tables']['mixed-art']['Row'] | Database['public']['Tables']['photography']['Row'];

export type TDBError = {
    code: string;
    details: null;
    hint: null;
    message: string;
};
