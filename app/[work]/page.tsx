import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { MIXED_ART } from '@/public/mixed-art';
import { PHOTOGRAPHY } from '@/public/photography';

export default async function page({ params }: { params: { work: string } }) {
    return params.work === 'photography' ? (
        <ImageGrid imgData={PHOTOGRAPHY} />
    ) : params.work === 'mixed-art' ? (
        <ImageGrid imgData={MIXED_ART} />
    ) : (
        notFound()
    );
}

export async function generateStaticParams() {
    return [{ work: 'photography' }, { work: 'mixed-art' }];
}

export const revalidate = 60 * 60 * 24;
