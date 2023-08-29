import { PropsWithChildren } from 'react';
import { Footer, Header } from '@/components';

import './globals.css';

export const metadata = {
    description: 'Time Snap photography and mixed arts',
    title: 'Time Snap',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html className="scroll-smooth" lang="en">
            <body className="flex text-black">
                <Header />
                <main className="min-h-screen flex-1 relative">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
