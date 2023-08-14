import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/rest/v1/${params.work}?select=*`);
    if (data) return <ImageGrid imgData={data} />;
    return notFound;
}
