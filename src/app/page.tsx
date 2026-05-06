import Image from 'next/image';
import Link from 'next/link';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import Banking from '../assets/banking.jpg';

import { fetchApplications } from '@/services/applications';

export default async function Home() {
  const { applications } = await fetchApplications();

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        externalAccess={true}
      />
      <main className="flex-1" id="main-content">
        <section>
          <Image
            priority
            src={Banking}
            alt="logo"
            fill={false}
          />
        </section>
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Portais</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {applications.map(application => (
                <Link key={application.id} href={`/portals/${application.slug}`} className="group">
                  <div className="rounded-lg border-2 border-transparent bg-white p-6 text-center shadow-md transition-shadow group-hover:border-[#2563EB]/20 hover:shadow-lg">
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-[#2563EB]">
                      {application.name}
                    </h3>
                    <p className="text-sm text-gray-600">{application.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
