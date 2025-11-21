'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import {useState} from 'react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[var(--brand-navy)] to-slate-900 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-[var(--brand-gold)]/30 group-hover:ring-[var(--brand-gold)] transition-all duration-300">
                <Image
                  src="/logo/logo.png"
                  alt="Smart Eco Ger Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Smart Eco Ger
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link 
              href="/" 
              className="relative text-gray-200 hover:text-[var(--brand-gold)] px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 group"
            >
              {t('home')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-gold)] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-gray-200 hover:text-[var(--brand-gold)] px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 group"
            >
              {t('about')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-gold)] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              href="/products" 
              className="relative text-gray-200 hover:text-[var(--brand-gold)] px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 group"
            >
              {t('products')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-gold)] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              href="/news" 
              className="relative text-gray-200 hover:text-[var(--brand-gold)] px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 group"
            >
              {t('news')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-gold)] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-200 hover:text-[var(--brand-gold)] px-4 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10 group"
            >
              {t('contact')}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--brand-gold)] group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
          </nav>

          {/* Right Side: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 rounded-xl transition-all duration-200"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 animate-in slide-in-from-top duration-200">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
            >
              {t('home')}
            </Link>
            <Link 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
            >
              {t('about')}
            </Link>
            <Link 
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
            >
              {t('products')}
            </Link>
            <Link 
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
            >
              {t('news')}
            </Link>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-[var(--brand-gold)] hover:bg-white/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
            >
              {t('contact')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="sm:hidden pt-4 border-t border-white/10 mt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}