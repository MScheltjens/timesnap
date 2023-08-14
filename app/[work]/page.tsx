import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/${params.work}?select=*`);
    if (data) return <ImageGrid imgData={data} />;
    return notFound;
}

export async function generateStaticParams() {
    return [{ work: 'photography' }, { work: 'mixed-art' }];
}

export const revalidate = 0;
