'use client';

import Link from 'next/link';

interface RedirectLinkInterface {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function RedirectLink({ href, children, className }: RedirectLinkInterface) {
  return (
    <Link
      href={href}
      className={className}
      onClick={e => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      {children}
    </Link>
  );
}
