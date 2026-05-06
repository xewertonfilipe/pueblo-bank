import Link from 'next/link';

import Image from 'next/image';
import PuebloBank from '../assets/pueblobank.svg';


export function Footer() {
  return (
    <footer role="contentinfo" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 grid-cols-3">
          <section className="col-span-1" aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">
              Sobre o Pueblo Bank
            </h2>
            <Link
              href="/"
              className="mb-4 flex items-center space-x-2 rounded-md focus:ring-2 focus:ring-[#ed145c] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              aria-label="Pós Tech News - Voltar para a página inicial"
            >
              <Image
                priority
                src={PuebloBank}
                alt="logo"
                width={146}
                height={32}
              />
            </Link>
            <p className="text-sm text-gray-400">
              Seu sistema de controle de financeiro mais confiável do Brasil.
            </p>
          </section>

          <section aria-labelledby="footer-useful-links">
            <h2 id="footer-useful-links" className="mb-4 text-lg font-semibold">
              Links Úteis
            </h2>
            <nav aria-label="Links úteis e informações legais">
              <ul className="space-y-2" role="list">
                <li>
                  <Link
                    href="#"
                    className="inline-block rounded-md px-1 py-1 text-sm text-gray-400 transition-colors hover:text-white focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block rounded-md px-1 py-1 text-sm text-gray-400 transition-colors hover:text-white focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block rounded-md px-1 py-1 text-sm text-gray-400 transition-colors hover:text-white focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block rounded-md px-1 py-1 text-sm text-gray-400 transition-colors hover:text-white focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                  >
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-newsletter">
            <h2 id="footer-newsletter" className="mb-4 text-lg font-semibold">
              Newsletter
            </h2>
            <p className="mb-4 text-sm text-gray-400">Receba as principais notícias em seu email.</p>
            <form className="flex flex-col space-y-2" aria-label="Formulário de inscrição na newsletter">
              <label htmlFor="newsletter-email" className="sr-only">
                Endereço de email para newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Seu email"
                required
                aria-required="true"
                aria-describedby="newsletter-description"
                className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm focus:border-[#ed145c] focus:ring-2 focus:ring-[#ed145c] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-[#ed145c] px-4 py-2 text-sm text-white transition-colors hover:bg-[#d91049] focus:ring-2 focus:ring-[#ed145c] focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                aria-describedby="newsletter-description"
              >
                Inscrever-se
              </button>
              <p id="newsletter-description" className="sr-only">
                Inscreva-se para receber as principais dicas do Pueblo Bank em seu email
              </p>
            </form>
          </section>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              <small>© 2026 Pueblo Bank. Todos os direitos reservados.</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
