import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { TDBImg } from '@/types/types';
import { supabaseClient } from '@/utils';

export const dynamic = 'force-dynamic';

//@ts-ignore
export default async function Page({ params }: { params: { work: string; id: string } }) {
    const supabase = createServerComponentClient<TDBImg>({ cookies });
    const { data: imageData } = (await supabase.from(params.work).select('*').eq('id', params.id)) as { data: TDBImg[] };
    return <div className="mt-44">{JSON.stringify(imageData)}</div>;
}

export async function generateStaticParams({ params }: { params: { work: string } }) {
    const { data: imageData } = (await supabaseClient.from(params.work).select('*')) as { data: TDBImg[] };
    if (imageData) return imageData.map((image) => ({ id: String(image.id) }));
    return notFound();
}
