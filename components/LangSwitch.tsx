// components/LangSwitch.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LangSwitch({ locale }: { locale: 'en' | 'ja' }) {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/');
  if (parts[1] !== 'en' && parts[1] !== 'ja') parts.splice(1, 0, locale);
  const base = parts.slice(2).join('/');
  const to = (l: 'en' | 'ja') => '/' + [l, base].filter(Boolean).join('/');

  return (
    <nav className="text-sm">
      <Link href={to('en')} className={locale==='en' ? 'font-bold underline' : ''}>EN</Link>
      {' '}|{' '}
      <Link href={to('ja')} className={locale==='ja' ? 'font-bold underline' : ''}>JP</Link>
    </nav>
  );
}
