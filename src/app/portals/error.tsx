'use client';

import Link from 'next/link';

export default function PortalsError() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-gray-900">Algo deu errado!</h2>

        <p className="mx-auto mb-8 max-w-md text-gray-600">Ocorreu um erro inesperado ao carregar a página.</p>

        <div className="space-x-4">
          <Link href={'/'} className="rounded-lg bg-gray-600 px-6 py-3 text-white transition-colors hover:bg-gray-700">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
