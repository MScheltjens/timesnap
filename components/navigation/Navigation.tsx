import { NavItem } from '../navItem/NavItem';

export const Navigation = () => {
    return (
        <nav className="flex items-center text-xs sm:text-base gap-4">
            <ul className="flex gap-2 sm:gap-4 lg:gap-8 flex-wrap justify-end">
                <NavItem label="mixed art" href="/mixed-art" />
                <NavItem label="photography" href="/photography" />
                <NavItem label="contact" href="/contact" />
            </ul>
        </nav>
    );
};
