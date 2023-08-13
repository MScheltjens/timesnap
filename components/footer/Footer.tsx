import { Admin, SocialIconGroup } from '@/components';

export const Footer = () => {
    return (
        <footer className="p-2 w-full z-10 transition ease-in 0.3s linear fixed bottom-0 bg-black bg-opacity-60 shadow-2xl shadow-gray-600 text-white">
            <div className="flex justify-center gap-6 relative overflow-visible">
                <SocialIconGroup />
            </div>
            <Admin />
        </footer>
    );
};
