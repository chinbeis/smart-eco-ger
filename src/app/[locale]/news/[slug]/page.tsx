import {getTranslations} from 'next-intl/server';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';

export default async function NewsDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations('News');

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--brand-navy)] mb-8">{slug}</h1>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">
              {/* This content would typically be fetched based on the slug */}
              {t('techDesc')}
            </p>
            <p className="text-gray-600">
              (Full article content placeholder for {slug})
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
