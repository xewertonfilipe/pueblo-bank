import { Search, SquareArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mb-8">
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#fde2e9]">
            <Search className="h-12 w-12 text-[#ed145c]" />
          </div>

          <h1 className="mb-2 text-6xl font-bold text-gray-900">404</h1>

          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Página não encontrada</h2>
        </div>

        <p className="mb-8 leading-relaxed text-gray-600">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente
          indisponível.
        </p>

        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">
              <SquareArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
