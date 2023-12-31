import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getNetwork } from '@/http';
import { TDBImg } from '@/types';

export default async function Page({ params }: { params: { work: string; id: string } }) {
    const { get } = getNetwork();
    const data = await get<TDBImg[]>(`/${params.work}?id=eq.${params.id}&select=*`);

    if (data) return <Image src={data[0].img_url ?? ''} width={500} height={500} alt={String(data[0].id) ?? ''} />;

    return notFound();
}
