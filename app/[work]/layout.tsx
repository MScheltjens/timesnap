import { PropsWithChildren } from 'react';
import { BackgroundImg } from '@/components';
import { backgrounds } from '@/utils';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <BackgroundImg backgrounds={backgrounds} />
            <div className="backdrop-brightness-50 h-screen overflow-scroll">
                <div className="max-w-[90%] pt-24 sm:pt-32 pb-12 mx-auto">{children}</div>
            </div>
        </>
    );
}
