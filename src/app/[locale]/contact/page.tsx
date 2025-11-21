import {useTranslations} from 'next-intl';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--brand-navy)] to-slate-900 py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">{t('title')}</h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>

      {/* Contact Info & Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-8">{t('infoTitle')}</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[var(--brand-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--brand-navy)] mb-2 text-lg">{t('addressHeading')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.rich('addressContent', {
                        br: () => <br />
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--brand-navy)] mb-2 text-lg">{t('phoneHeading')}</h3>
                    <div className="space-y-1 text-gray-600">
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

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--brand-navy)] mb-2 text-lg">{t('emailHeading')}</h3>
                    <a 
                      href="mailto:smartecoger@gmail.com" 
                      className="text-gray-600 hover:text-[var(--brand-gold)] transition-colors"
                    >
                      smartecoger@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--brand-navy)] mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[var(--brand-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('hoursHeading')}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">{t('weekdays')}</span>
                    <span>{t('weekdaysHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t('saturday')}</span>
                    <span>{t('saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{t('sunday')}</span>
                    <span className="text-red-500">{t('closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-navy)] mb-8">{t('findUs')}</h2>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8362179956784!2d106.86463931571905!3d47.91493197920478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692410e7a8f91%3A0x0!2zNDfCsDU0JzUzLjgiTiAxMDbCsDUxJzU3LjkiRQ!5e0!3m2!1sen!2smn!4v1234567890123"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smart Eco Ger Office Location"
                ></iframe>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://maps.google.com/?q=WW87+XX7,CHD-1+khoroo,Ulaanbaatar+15160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[var(--brand-navy)] text-white font-semibold py-4 px-6 rounded-xl hover:bg-blue-900 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {t('getDirections')}
                </a>

                <a
                  href="tel:+97691910300"
                  className="flex items-center justify-center gap-3 bg-[var(--brand-gold)] text-white font-semibold py-4 px-6 rounded-xl hover:bg-yellow-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('callNow')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
