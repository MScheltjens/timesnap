import { Admin, SocialIconGroup } from '@/components';

export const Footer = () => {
    return (
        <footer className="p-2 bg-gradient-to-t from-black/90 to-transparent w-full z-10 transition ease-in 0.3s linear fixed bottom-0 text-gray-300 flex justify-center gap-6 overflow-visible">
            <SocialIconGroup />
            <Admin />
            {/* TODO: correct place for admin?  */}
        </footer>
    );
};
