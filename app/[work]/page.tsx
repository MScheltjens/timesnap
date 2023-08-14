// import { notFound } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ImageGrid } from '@/components';

export default async function page({ params }: { params: { work: string } }) {
    const res = await fetch(`http://localhost:3000/api/${params.work}`);
    const data = await res.json();
    if (data) return <ImageGrid imgData={data} />;
    return notFound();
}

export const generateStaticParams = () => {
    return [{ params: { work: 'photography' } }, { params: { work: 'mixed-arts' } }];
};
