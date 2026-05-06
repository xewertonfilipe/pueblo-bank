import Link from 'next/link';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PortalsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        externalAccess={false}
      />
      <main className="flex-1">
        <section className="bg-gray-100 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-4">
              <nav aria-label="Breadcrumb" className="text-sm text-gray-600">
                <Link
                  href="/"
                  className="hove:text-[#ed145c] rounded-md px-1 focus:ring-2 focus:ring-[#ed145c] focus:ring-offset-2"
                >
                  Home
                </Link>
                <span className="mx-2" aria-hidden="true">
                  /
                </span>
                <span className="text-gray-900">Portais</span>
              </nav>
              <header>
                <h1 className="text-3xl font-bold text-gray-900">Portal de acessos</h1>
                <p className="mt-2 text-gray-600">Acesse</p>
              </header>
            </div>
          </div>
        </section>
        <div className="py-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
