'use client';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';
import { useSupabaseSession } from '@/hooks';

export const Admin = () => {
    const session = useSupabaseSession();
    const user = session?.user;
    return (
        <>
            {session && (
                <div className="absolute right-5 -top-10 flex items-center gap-2">
                    <p>Admin: {user?.email}</p>
                    <form action="/auth/sign-out" method="post" className="flex items-center">
                        <button>
                            <ArrowRightOnRectangleIcon className="w-6" />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};
