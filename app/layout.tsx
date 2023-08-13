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
            <body>
                <Header />
                <main className="min-h-screen flex flex-col items-center">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
