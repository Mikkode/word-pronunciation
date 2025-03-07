"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type ModernNavigationProps = {
  categories: Category[];
};

export default function ModernNavigation({ categories }: ModernNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span className="hidden font-bold sm:inline-block text-xl">WordSpeak</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/falshcard"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/falshcard' ? 'text-indigo-600' : 'text-muted-foreground'
            }`}
          >
            All Words
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link
                    href={`/category/${category.id}`}
                    className={`flex items-center ${
                      pathname === `/category/${category.id}` ? 'text-indigo-600' : ''
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: category.icon }} className="mr-2 h-5 w-5" />
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link
            href="/admin"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/admin' ? 'text-indigo-600' : 'text-muted-foreground'
            }`}
          >
            Admin
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname === '/' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  All Words
                </Link>
                
                <div className="px-3 py-2 text-base font-medium text-gray-700">
                  Categories
                </div>
                
                <div className="pl-3 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        pathname === `/category/${category.id}` ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span dangerouslySetInnerHTML={{ __html: category.icon }} className="mr-2 h-5 w-5" />
                      {category.name}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href="/admin"
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    pathname === '/admin' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 