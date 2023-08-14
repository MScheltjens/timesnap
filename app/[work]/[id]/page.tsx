import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
// import { getNetwork } from '@/http';
import { TDBImg } from '@/types/types';

export default async function Page({ params }: { params: { work: string; id: string } }) {
    const supabase = createServerComponentClient<TDBImg[]>({ cookies });
    const { data } = await supabase.from(params.work).select('*').eq('id', String(params.id));

    return <div className="mt-44">{/* <Image src={data[0].img_url!} alt="DFSQ" width={500} height={500} /> */}</div>;
}

export const dynamic = 'force-dynamic';
