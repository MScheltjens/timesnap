import { PropsWithChildren } from 'react';
import { BackgroundImg } from '@/components';
import { backgrounds } from '@/utils';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full flex flex-col items-center relative">
            <BackgroundImg backgrounds={backgrounds} />
            <div className="w-full mt-20 h-full backdrop-blur-sm">{children}</div>
        </div>
    );
}

export function generateStaticParams() {
    return [{ work: 'photography' }, { work: 'mixed-art' }];
}
