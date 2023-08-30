import { StaticImageData } from 'next/image';
import { Database } from '@/types/supabase.types';

export type TDBError = {
    code: string;
    details: null;
    hint: null;
    message: string;
};

export type TDBImg = Database['public']['Tables']['mixed-art']['Row'] | Database['public']['Tables']['photography']['Row'];

export type TFormData = {
    name: string;
    email: string;
    message: string;
};

export type TImgBackGround = {
    title: string;
    imgData: StaticImageData;
};

export type TWork = 'mixed-art' | 'photography';
