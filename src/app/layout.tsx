import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kids Learning App',
  description: 'A fun and educational app for children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-[#56ebff] to-white">
          <div className="sticky top-0 z-50">
            <Navigation />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
