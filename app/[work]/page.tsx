import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/${params.work}`);
    if (data) return <ImageGrid imgData={data} />;
    return notFound();
}

export const generateStaticParams = () => {
    return [{ params: { work: 'photography' } }, { params: { work: 'mixed-arts' } }];
};

.