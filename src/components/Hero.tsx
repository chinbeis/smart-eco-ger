import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/product/df5cb723-9328-44a7-b961-7e5e5790789c.jpg"
          alt="Smart Eco Ger Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="mb-10 max-w-2xl text-lg font-medium sm:text-xl md:text-2xl drop-shadow-md">
           {/* You can add a subtitle translation key if needed */}
           Smart Eco Ger - Modern Nomad Lifestyle
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/products"
            className="rounded-full bg-[var(--brand-gold)] px-8 py-3 text-base font-bold text-[var(--brand-navy)] shadow-lg hover:bg-yellow-400 transition-transform hover:scale-105"
          >
            {t('products')}
          </Link>
          <Link
            href="/about"
            className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-white/10 transition-transform hover:scale-105"
          >
            {t('about')}
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--brand-navy)] px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-blue-900 transition-transform hover:scale-105"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </div>
  );
}
