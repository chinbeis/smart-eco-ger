import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function NewsPage() {
  // const tNavbar = useTranslations('Navbar');
  const t = useTranslations('News');

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <div className="bg-[var(--brand-navy)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl opacity-90">{t('subtitle')}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full bg-gray-200">
                <Image
                  src="/product/7220aa22-d9e9-4afa-aa60-6bd8835fc26f.jpg"
                  alt="News 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-[var(--brand-navy)] text-xs px-2 py-1 rounded-full font-bold mb-2">Technology</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('techTitle')}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {t('techDesc')}
                </p>
                <a href="#" className="text-[var(--brand-gold)] font-semibold hover:text-[var(--brand-navy)]">{t('readMore')} &rarr;</a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full bg-gray-200">
                 <Image
                  src="/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg"
                  alt="News 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold mb-2">Sustainability</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sustTitle')}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {t('sustDesc')}
                </p>
                <a href="#" className="text-[var(--brand-gold)] font-semibold hover:text-[var(--brand-navy)]">{t('readMore')} &rarr;</a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full bg-gray-200">
                 <Image
                  src="/product/df5cb723-9328-44a7-b961-7e5e5790789c.jpg"
                  alt="News 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold mb-2">Customer Story</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('custTitle')}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {t('custDesc')}
                </p>
                <a href="#" className="text-[var(--brand-gold)] font-semibold hover:text-[var(--brand-navy)]">{t('readMore')} &rarr;</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
