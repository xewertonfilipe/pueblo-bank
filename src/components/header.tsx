'use client';

import { HeaderProps } from '@/types/header';
import Image from 'next/image';
import Link from 'next/link';
import PuebloBank from '../assets/pueblobank.svg';

export function Header({ externalAccess }: HeaderProps) {
  return (
    <>
      <header role="banner" className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-md focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:outline-none"
              aria-label="Pueblo Bank - Home"
            >
              <Image
                priority
                src={PuebloBank}
                alt="logo"
                width={146}
                height={32}
              />
            </Link>

            <nav>
              <Link
                href={externalAccess ? '/bank' : '/'}
                className="rounded-md px-2 py-1 font-medium transition-colors focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:outline-none"
              >
                {externalAccess ? 'Acessar conta' : 'Home'}
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
