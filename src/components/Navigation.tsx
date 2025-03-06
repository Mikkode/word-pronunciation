"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types';

type NavigationProps = {
  categories: Category[];
};

export default function Navigation({ categories }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="font-bold text-xl">WordSpeak</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
                }`}
              >
                All Words
              </Link>
              
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === `/category/${category.id}` ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
                  }`}
                >
                  <span className="flex items-center">
                    <span dangerouslySetInnerHTML={{ __html: category.icon }} className="mr-2 h-5 w-5" />
                    {category.name}
                  </span>
                </Link>
              ))}
              
              <Link 
                href="/admin" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/admin' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
                }`}
              >
                Admin
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            All Words
          </Link>
          
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === `/category/${category.id}` ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <span dangerouslySetInnerHTML={{ __html: category.icon }} className="mr-2 h-5 w-5" />
                {category.name}
              </span>
            </Link>
          ))}
          
          <Link
            href="/admin"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/admin' ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
} 