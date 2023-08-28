import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const imgData = await get<TDBImg[]>(`/${params.work}?select=*`);

    if (imgData) return <ImageGrid imgData={imgData} />;

    return notFound();
}

export async function generateStaticParams() {
    return [{ work: 'photography' }, { work: 'mixed-art' }];
}

export const revalidate = 60 * 60 * 24;
