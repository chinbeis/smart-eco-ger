"use client"

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';
import {useState, useEffect} from 'react';

export default function Hero() {
  const t = useTranslations('Hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/product/df5cb723-9328-44a7-b961-7e5e5790789c.jpg',
    '/images/15.jpg',
    '/images/11.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Smart Eco Ger Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="mb-10 max-w-2xl text-lg font-medium sm:text-xl md:text-2xl drop-shadow-md">
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

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}