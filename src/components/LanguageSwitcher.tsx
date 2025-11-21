'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import {ChangeEvent, useTransition} from 'react';
// import {Globe} from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const languages = {
    mn: {label: 'Монгол'},
    en: {label: 'English'},
    zh: {label: '中文'}
  };

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  };

  return (
    <div className="relative group">

      <select
        value={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="h-10 pl-4 pr-9 text-sm font-medium bg-white/10 border border-white/20 text-white rounded-xl cursor-pointer hover:border-[var(--brand-gold)] hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]/50 focus:border-[var(--brand-gold)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed appearance-none backdrop-blur-sm"
        style={{
          backgroundImage: 'none'
        }}
      >
        <option value="mn" className="bg-slate-800 text-white">{languages.mn.label}</option>
        <option value="en" className="bg-slate-800 text-white">{languages.en.label}</option>
        <option value="zh" className="bg-slate-800 text-white">{languages.zh.label}</option>
      </select>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}