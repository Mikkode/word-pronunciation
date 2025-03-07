"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ColorfulText from './ColorfulText';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Cards', path: '/flashcard' },
    { name: 'Categories', path: '/category' },
    { name: 'Games', path: '/games' },
  ];

  const colors = ['#ff56ac', '#56ebff', '#a057ff', '#ffa726'];

  return (
    <nav className="py-3 px-6 backdrop-blur-md bg-white/70 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <Image 
                src="/IMG_1163.jpg" 
                alt="Kids Logo" 
                width={120} 
                height={50} 
                className="mr-2"
              /> */}
              <div className="ml-2 hidden sm:block">
                <ColorfulText text="WordNest" className="text-3xl font-extrabold" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className="relative px-5 py-2 font-bold text-white rounded-full overflow-hidden group border-2 border-black"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12" 
                      style={{ backgroundColor: colors[index % colors.length] }}></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-black opacity-0 group-hover:opacity-20"></span>
                <span className="relative" style={{ 
                  textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[#ff56ac] text-white border-2 border-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg border-4 border-black p-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.path}
                  className="py-2 px-4 rounded-lg font-bold text-center border-2 border-black"
                  style={{ 
                    backgroundColor: `${colors[index % colors.length]}`,
                    color: 'white',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  <span style={{ 
                    textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                  }}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 