import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { UploadForm } from '@/components';

export const dynamic = 'force-dynamic';

export default async function Page() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) redirect('/login');

    return (
        <div className="mt-36">
            <UploadForm />
        </div>
    );
}
