'use client';

import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const SocialIconGroup = () => {
    return (
        //  this icon group has its own styling (react icons, NOT heroicons, so the context can fit here for now)
        <IconContext.Provider
            value={{
                className: 'hover:text-teal-700 hover:animate-ping text-xl',
            }}
        >
            <Link href="https://www.facebook.com/profile.php?id=100027116332614" target="_blank">
                <FaFacebookSquare />
            </Link>
            <Link href="https://www.instagram.com/123timesnap/" target="_blank">
                <FaInstagram />
            </Link>
            <Link href="contact">
                <FaEnvelope />
            </Link>
        </IconContext.Provider>
    );
};
