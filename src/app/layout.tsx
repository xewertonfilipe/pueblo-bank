import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pueblo Bank',
  description: 'Gerencie seu gastos',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
