import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import header from './../components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kanban board',
    description: 'Kanban board build by Remco Stoeten',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <>
                    <header />
                    {children}
                </>
            </body>
        </html>
    );
}
