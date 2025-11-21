import {getTranslations} from 'next-intl/server';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Image from 'next/image';

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations('Products');

  // Mock product data mapping based on ID
  const getProductImage = (productId: string) => {
    if (productId === 'solar-wind') return '/product/df5cb723-9328-44a7-b961-7e5e5790789c.jpg';
    if (productId === 'smart-heater') return '/product/7f9aaaec-340f-4760-8af3-bbea308f2c0a.jpg';
    if (productId === 'air-purifier') return '/product/032be539-54b8-4b7b-9921-56a66d9ed1d3.jpg';
    return '/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg';
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={getProductImage(id)}
                alt={id}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-[var(--brand-navy)] mb-6 capitalize">{id.replace(/-/g, ' ')}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('smartGerDesc')} {/* Placeholder description */}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-4">{t('specsTitle')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t('area')}</li>
                <li>{t('height')}</li>
                <li>{t('walls')}</li>
                <li>{t('toono')}</li>
              </ul>
            </div>

            <button className="bg-[var(--brand-navy)] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-lg">
              {t('downloadBrochure')}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
