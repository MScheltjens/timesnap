import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { LoginForm, UploadForm } from '@/components';

export const dynamic = 'force-dynamic';

export default async function Page() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    return <div className="flex-1 flex h-screen justify-center items-center">{session ? <UploadForm /> : <LoginForm />}</div>;
}
