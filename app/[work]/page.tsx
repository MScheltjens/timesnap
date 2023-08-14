// import { notFound } from 'next/navigation';
// import { ImageGrid } from '@/components';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function page({ params }: { params: { work: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/${params.work}?select=*`, { cache: 'no-cache' });

    // if (!data) return notFound();

    // return <ImageGrid images={data!} />;
    return <div className="text-white mt-4">{JSON.stringify(data)}</div>;
}

// export const generateStaticParams = () => {
//     return [{ params: { work: 'photography' } }, { params: { work: 'mixed-arts' } }];
// };
