import {useTranslations} from 'next-intl';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Image from 'next/image';
// import Image from 'next/image';
// import {Link} from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('Home');
  const tSmartEcoGer = useTranslations('SmartEcoGerSection');

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <Hero />

      {/* Technical Specifications Highlight */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-navy)] mb-4 md:mb-6">
              {t('engineeredTitle')}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('engineeredDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--brand-gold)]/30 hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-gold)] mb-3 group-hover:scale-110 transition-transform duration-300">
                  -45°C
                </h3>
                <p className="text-gray-800 font-semibold text-lg mb-2">{t('coldRes')}</p>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{t('coldResDesc')}</p>
              </div>
            </div>

            <div className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--brand-gold)]/30 hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-gold)] mb-3 group-hover:scale-110 transition-transform duration-300">
                  8 Mag
                </h3>
                <p className="text-gray-800 font-semibold text-lg mb-2">{t('earthquakeRes')}</p>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{t('earthquakeResDesc')}</p>
              </div>
            </div>

            <div className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--brand-gold)]/30 hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-gold)] mb-3 group-hover:scale-110 transition-transform duration-300">
                  30 m/s
                </h3>
                <p className="text-gray-800 font-semibold text-lg mb-2">{t('windRes')}</p>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{t('windResDesc')}</p>
              </div>
            </div>

            <div className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--brand-gold)]/30 hover:-translate-y-2">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-gold)] mb-3 group-hover:scale-110 transition-transform duration-300">
                  50+ Yrs
                </h3>
                <p className="text-gray-800 font-semibold text-lg mb-2">{t('lifespan')}</p>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{t('lifespanDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--brand-navy)] mb-4 md:mb-6">
              {t('advantagesTitle')}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t('advantagesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Advantage 1 */}
            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[var(--brand-navy)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--brand-navy)] text-center">
                {t('energyEff')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base md:text-lg">
                {t('energyEffDesc')}
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[var(--brand-gold)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--brand-navy)] text-center">
                {t('ecoFriendly')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base md:text-lg">
                {t('ecoFriendlyDesc')}
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--brand-navy)] text-center">
                {t('smartControl')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base md:text-lg">
                {t('smartControlDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Smart Eco Ger Section - New */}
            <section className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg"
                  alt="Smart Eco Ger Background"
                  fill
                  className="object-cover opacity-40"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/70"></div>
              </div>
              
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Side - Text Content */}
                  <div className="space-y-6">
                    {/* Title */}
                    <div className="inline-block px-6 py-2 mb-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {tSmartEcoGer('title')}
                      </h2>
                    </div>
      
                    {/* Content paragraphs */}
                    <div className="space-y-4 text-white">
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        {tSmartEcoGer('desc1')}
                      </p>
      
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        {tSmartEcoGer('desc2')}
                      </p>
      
                      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        {tSmartEcoGer('desc3')}
                      </p>
      
                      {/* Closing tagline */}
                      <div className="pt-4">
                        <p className="text-lg md:text-xl font-bold text-[var(--brand-gold)]">
                          {tSmartEcoGer('tagline')}
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Right Side - Main Image */}
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--brand-gold)]">
                      <Image
                        src="/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg"
                        alt="Smart Eco Ger"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
      <Footer />
    </main>
  );
}
