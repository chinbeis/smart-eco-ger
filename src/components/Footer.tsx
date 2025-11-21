import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {Mail, Phone, MapPin, Facebook, Instagram} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Navbar');
  const tFooter = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[var(--brand-navy)] to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[var(--brand-gold)] mb-4">Smart Eco Ger</h3>
            <p className="text-gray-300 leading-relaxed">
              {tFooter('desc')}
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">{tFooter('followUs')}</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--brand-gold)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--brand-gold)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[var(--brand-gold)]">{tFooter('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--brand-gold)] transition-all duration-300"></span>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--brand-gold)] transition-all duration-300"></span>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--brand-gold)] transition-all duration-300"></span>
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--brand-gold)] transition-all duration-300"></span>
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-[var(--brand-gold)] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--brand-gold)] transition-all duration-300"></span>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-[var(--brand-gold)]">{tFooter('contact')}</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-gold)]/20 transition-colors">
                    <MapPin className="w-5 h-5 text-[var(--brand-gold)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Address</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tFooter('address')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-gold)]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[var(--brand-gold)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Email</p>
                    <a 
                      href="mailto:smartecoger@gmail.com" 
                      className="text-gray-300 hover:text-[var(--brand-gold)] text-sm transition-colors"
                    >
                      smartecoger@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-gold)]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[var(--brand-gold)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Phone</p>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <a href="tel:+97691910300" className="block hover:text-[var(--brand-gold)] transition-colors">
                      +976 91910300
                    </a>
                    <a href="tel:+97694400300" className="block hover:text-[var(--brand-gold)] transition-colors">
                      +976 94400300
                    </a>
                    <a href="tel:+97688820300" className="block hover:text-[var(--brand-gold)] transition-colors">
                      +976 88820300
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {currentYear} Smart Eco Ger. {tFooter('rights')}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[var(--brand-gold)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--brand-gold)] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}