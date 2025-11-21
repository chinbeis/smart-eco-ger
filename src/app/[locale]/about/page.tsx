import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');
  const tSmartEcoGer = useTranslations('SmartEcoGerSection');

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section for About */}
      <div className="bg-gradient-to-br from-[var(--brand-navy)] via-[var(--brand-navy)] to-slate-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--brand-gold)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      {/* Company History / Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-6">{t('missionTitle')}</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                {t('missionDesc')}
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/product/032be539-54b8-4b7b-9921-56a66d9ed1d3.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
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
              <div className="inline-block bg-[var(--brand-gold)] px-6 py-2 mb-4">
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
