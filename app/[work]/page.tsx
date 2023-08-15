import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/${params.work}?select=*`);
    if (data)
        return (
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-6xl p-4 mt-16">Title</h2>
                <ImageGrid imgData={data} />
            </div>
        );
    return notFound;
}

export async function generateStaticParams() {
    return [{ work: 'photography' }, { work: 'mixed-art' }];
}

export const revalidate = 0;
