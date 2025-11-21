'use client';

import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';
// import ProductCard from '../../../components/ProductCard';

export default function ProductsPage() {
  const t = useTranslations('Products');
  const tDetails = useTranslations('SmartEcoGerDetails');

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/pdf/Brandbooksmartecoger.pdf';
    link.download = 'Smart-Eco-Ger-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--brand-navy)] via-blue-900 to-slate-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-gold)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Product: Smart Eco Ger - Detailed */}
          <div className="mb-16 md:mb-20 space-y-12 md:space-y-16">
            
            {/* 1. Intro & Image */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Image - Mobile: full width, Desktop: sticky */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--brand-gold)]">
                  <Image
                    src="/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg"
                    alt="Smart Eco Ger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                {/* General Introduction */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-navy)] mb-4">{tDetails('intro.title')}</h2>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed border-l-4 border-[var(--brand-gold)] pl-4">
                    {tDetails('intro.desc')}
                  </p>
                </div>

                {/* Specs */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--brand-navy)] mb-4 flex items-center">
                    <span className="w-1.5 h-8 bg-[var(--brand-gold)] mr-3 rounded-full"></span>
                    {tDetails('specs.title')}
                  </h3>
                  <ul className="space-y-2.5 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.area')}</span></li>
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.height')}</span></li>
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.wall')}</span></li>
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.toono')}</span></li>
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.floor')}</span></li>
                    <li className="flex items-start"><span className="text-[var(--brand-gold)] font-bold mr-3 text-lg">•</span> <span>{tDetails('specs.assembly')}</span></li>
                  </ul>
                </div>

                {/* Materials */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-2xl border border-blue-200 shadow-md">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--brand-navy)] mb-4 flex items-center">
                    <span className="w-1.5 h-8 bg-blue-600 mr-3 rounded-full"></span>
                    {tDetails('materials.title')}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/60 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-900 mb-1">{tDetails('materials.frpTitle')}</h4>
                      <p className="text-gray-700 text-sm md:text-base">{tDetails('materials.frpDesc')}</p>
                    </div>
                    <div className="bg-white/60 p-4 rounded-xl">
                      <h4 className="font-bold text-blue-900 mb-1">{tDetails('materials.xpsTitle')}</h4>
                      <p className="text-gray-700 text-sm md:text-base">{tDetails('materials.xpsDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Features Grid */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-navy)] mb-8 text-center">{tDetails('features.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl mb-4">🌡️</div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{tDetails('features.climate')}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl mb-4">🌋</div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{tDetails('features.earthquake')}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl mb-4">💨</div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{tDetails('features.wind')}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl md:text-5xl mb-4">❄️</div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{tDetails('features.snow')}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="text-4xl md:text-5xl mb-4">🌬️</div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">{tDetails('features.ventilation')}</p>
                </div>
              </div>
            </div>

            {/* 3. Structure Section - Three Cards */}
            <div className="relative">
              {/* Mobile: Horizontal Scroll */}
              <div className="sm:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                  {[
                    { key: 'card1', image: '/product/structure/struc1.PNG', alt: 'Wall Structure' },
                    { key: 'card2', image: '/product/structure/struc2.PNG', alt: 'Energy Saving' },
                    { key: 'card3', image: '/product/structure/struc3.PNG', alt: 'Fast Construction' }
                  ].map((item) => (
                    <div key={item.key} className="flex flex-col min-w-[85vw] flex-shrink-0">
                      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden bg-white p-4 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-contain"
                          sizes="85vw"
                        />
                      </div>
                      <div className="bg-[#c49b3c] text-white p-6 rounded-b-2xl flex-1">
                        <h4 className="text-lg font-bold mb-4">{tDetails(`structureCards.${item.key}.title`)}</h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {tDetails(`structureCards.${item.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet and Desktop: Grid Layout */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-4 md:gap-6">
                {[
                  { key: 'card1', image: '/product/structure/struc1.PNG', alt: 'Wall Structure' },
                  { key: 'card2', image: '/product/structure/struc2.PNG', alt: 'Energy Saving' },
                  { key: 'card3', image: '/product/structure/struc3.PNG', alt: 'Fast Construction' }
                ].map((item) => (
                  <div key={item.key} className="flex flex-col">
                    <div className="relative h-56 md:h-64 w-full rounded-t-2xl overflow-hidden bg-white p-4 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 33vw, 33vw"
                      />
                    </div>
                    <div className="bg-[#c49b3c] text-white p-6 rounded-b-2xl flex-1">
                      <h4 className="text-lg md:text-xl font-bold mb-4">{tDetails(`structureCards.${item.key}.title`)}</h4>
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {tDetails(`structureCards.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Energy Efficiency Section - Three Cards */}
            <div className="relative">
              {/* Mobile: Horizontal Scroll */}
              <div className="sm:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                  {[
                    { key: 'card1', image: '/product/energy/energy1.PNG', alt: 'Strong Wind Resistance' },
                    { key: 'card2', image: '/product/energy/energy2.PNG', alt: 'Smart Ventilation System' },
                    { key: 'card3', image: '/product/energy/energy3.PNG', alt: 'Snow Load Capacity' }
                  ].map((item) => (
                    <div key={item.key} className="flex flex-col min-w-[85vw] flex-shrink-0">
                      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="85vw"
                        />
                      </div>
                      <div className="bg-[#0a2351] text-white p-6 rounded-b-2xl flex-1">
                        <h4 className="text-lg font-bold mb-4">{tDetails(`energyCards.${item.key}.title`)}</h4>
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {tDetails(`energyCards.${item.key}.desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet and Desktop: Grid Layout */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  { key: 'card1', image: '/product/energy/energy1.PNG', alt: 'Strong Wind Resistance' },
                  { key: 'card2', image: '/product/energy/energy2.PNG', alt: 'Smart Ventilation System' },
                  { key: 'card3', image: '/product/energy/energy3.PNG', alt: 'Snow Load Capacity' }
                ].map((item, index) => (
                  <div key={item.key} className={`flex flex-col ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                    <div className="relative h-56 md:h-64 w-full rounded-t-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="bg-[#0a2351] text-white p-6 rounded-b-2xl flex-1">
                      <h4 className="text-lg md:text-xl font-bold mb-4">{tDetails(`energyCards.${item.key}.title`)}</h4>
                      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {tDetails(`energyCards.${item.key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Smart System & Energy */}
            <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 rounded-3xl p-6 md:p-10 lg:p-12 text-white shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[var(--brand-gold)]">{tDetails('smartSystem.title')}</h3>
                  <ul className="space-y-5 md:space-y-6">
                    <li className="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">📱</span>
                      <div>
                        <p className="font-semibold text-base md:text-lg mb-1">{tDetails('smartSystem.iotTitle')}</p>
                        <p className="text-gray-300 text-sm md:text-base">{tDetails('smartSystem.iot')}</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">🛡️</span>
                      <div>
                        <p className="font-semibold text-base md:text-lg mb-1">{tDetails('smartSystem.sensorsTitle')}</p>
                        <p className="text-gray-300 text-sm md:text-base">{tDetails('smartSystem.sensors')}</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                      <span className="text-2xl md:text-3xl mr-4 flex-shrink-0">⚡</span>
                      <div>
                        <p className="font-semibold text-base md:text-lg mb-1">{tDetails('smartSystem.energyTitle')}</p>
                        <p className="text-gray-300 text-sm md:text-base">{tDetails('smartSystem.energy')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative h-64 lg:h-full min-h-[300px] lg:min-h-[400px] rounded-2xl overflow-hidden border-4 border-[var(--brand-gold)]/30 shadow-xl">
                  <Image
                    src="/product/7f9aaaec-340f-4760-8af3-bbea308f2c0a.jpg"
                    alt="Smart System"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* 4. Applications */}
            <div className="text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--brand-navy)] mb-4">{tDetails('applications.title')}</h3>
              <p className="text-base md:text-lg text-gray-700 font-medium">{tDetails('applications.list')}</p>
            </div>
            
            {/* Video Player Section */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 md:p-10 border-2 border-gray-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-navy)] mb-6 text-center">
                {tDetails('videoSection.title')}
              </h3>
              <div className="max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--brand-gold)]">
                  <video 
                    className="w-full h-auto"
                    controls
                    poster="/product/442c4846-f77e-462c-9d18-1f5e7ecc9328.jpg"
                  >
                    <source src="/video/ger.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={handleDownloadBrochure}
                className="bg-[var(--brand-navy)] text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center gap-2 text-sm md:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('downloadBrochure')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
