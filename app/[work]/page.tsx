import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { MIXED_ART } from '@/public/mixed-art';
import { PHOTOGRAPHY } from '@/public/photography';

export default async function page({ params }: { params: { work: string } }) {
    if (params.work === 'photography') return <ImageGrid imgData={PHOTOGRAPHY} />;
    if (params.work === 'mixed-art') return <ImageGrid imgData={MIXED_ART} />;

    return notFound();
}
