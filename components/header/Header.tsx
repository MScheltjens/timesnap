'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navigation } from '../navigation/Navigation';
import { LogoText } from '../svgs';
import { useScrollDirection } from '@/hooks';

export const Header = () => {
    const scrollDirection = useScrollDirection(150);
    const pathname = usePathname();

    return (
        <header
            className={`fixed py-4 sm:py-8 font-light bg-gradient-to-b  from-black/70 to-transparent flex items-center w-full z-10 transition ease-in 0.5s linear ${
                pathname !== '/' && 'text-gray-300'
            } ${scrollDirection === 'down' ? '-translate-y-full' : scrollDirection === 'up' ? 'translate-y-0' : ''} `}
        >
            <div className="max-w-[90%] flex items-center justify-between container mx-auto gap-20">
                <Link href="/">
                    <LogoText className={`fill-gray-300/70 hover:animate-ping ${pathname === '/' && 'fill-transparent'}`} height={48} />
                </Link>
                <Navigation />
            </div>
        </header>
    );
};
