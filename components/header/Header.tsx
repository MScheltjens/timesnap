'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navigation } from '../navigation/Navigation';
import { useScrollDirection } from '@/hooks';
import logo from '@/public/TimeSnapLogo.jpg';

export const Header = () => {
    const scrollDirection = useScrollDirection(150);
    const pathname = usePathname();
    console.log(pathname);

    return (
        <header
            className={`fixed font-light flex items-center w-full z-10 transition ease-in 0.5s linear ${
                pathname === '/' || pathname === '/mixed-art' || pathname === '/contact' ? 'text-black' : 'text-white'
            } ${scrollDirection === 'down' ? '-translate-y-full' : scrollDirection === 'up' ? 'translate-y-0' : ''} `}
        >
            <div className="w-full px-4 flex items-center justify-between container mx-auto gap-20">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="time-snapp logo"
                        priority
                        className={`transition-all ease-in 0.4s linear ${scrollDirection === 'down' && 'translate-y-full rounded-b-lg'}`}
                    />
                </Link>
                <Navigation />
                {/* TODO: style btn */}
            </div>
        </header>
    );
};
