import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { getDictionary } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Inception Studio Capital',
};

export const dynamicParams = false; // only build en/ja

const LOCALES = ['en', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!LOCALES.includes(locale as Locale)) return null; // or notFound()
  const dict = await getDictionary(locale, 'common');

  return (
    <>
      <Nav locale={locale} labels={dict.common.nav} />
      {children}
    </>
  );
}
