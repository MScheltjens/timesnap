import { PropsWithChildren } from 'react';
import { BackgroundImg } from '@/components';
import { backgrounds } from '@/utils';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full flex flex-col items-center relative">
            <BackgroundImg backgrounds={backgrounds} />
            <div className="w-full pt-24 sm:pt-28 h-full backdrop-blur-sm">{children}</div>
        </div>
    );
}
