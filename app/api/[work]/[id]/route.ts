import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { TDBImg } from '@/types/types';

export async function GET(request: Request, { params }: { params: { work: string; id: string } }) {
    const supabase = createRouteHandlerClient<TDBImg>({ cookies });
    const { data } = (await supabase.from(params.work).select('*').eq('id', params.id)) as { data: TDBImg[] };
    if (data) return new NextResponse(JSON.stringify(data[0]), { status: 200 });
    return new NextResponse(JSON.stringify(data[0]), { status: 200 });
}

export const dynamic = 'force-dynamic';
