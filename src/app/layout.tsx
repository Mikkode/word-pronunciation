import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { kgHappy } from '@/lib/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WordNest - Learn Languages with Fun',
  description: 'A fun and interactive way to learn new languages',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kgHappy.variable}`}>
      <body className={`${inter.className} bg-[#56ebff]/30 min-h-screen relative`}>
        {/* Barre de navigation en premier pour qu'elle soit au-dessus */}
        <Navigation />
        
        {/* Images décoratives positionnées sous la barre de navigation */}
        <div className="absolute top-20 left-0 w-32 md:w-48 h-32 md:h-48 pointer-events-none z-0 opacity-80">
          <Image 
            src="/cloud.png" 
            alt="Cloud decoration" 
            width={200} 
            height={200}
            className="object-contain"
            priority
          />
        </div>
        
        <div className="absolute top-20 right-0 w-32 md:w-48 h-32 md:h-48 pointer-events-none z-0 opacity-80">
          <Image 
            src="/arc.png" 
            alt="Rainbow decoration" 
            width={200} 
            height={200}
            className="object-contain"
            priority
          />
        </div>
        
        <main className="relative z-10 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
