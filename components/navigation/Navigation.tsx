'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from '../navItem/NavItem';

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center text-xs sm:text-base gap-4">
            <ul className="flex gap-2 lg:gap-6 flex-wrap justify-end">
                {pathname !== '/' && <NavItem label="home" href="/" />}
                <NavItem label="photography" href="/photography" />
                <NavItem label="mixed art" href="/mixed-art" />
                <NavItem label="contact" href="/contact" />
            </ul>
        </nav>
    );
};
