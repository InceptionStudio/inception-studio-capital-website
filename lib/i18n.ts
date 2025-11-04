import 'server-only';

export type Locale = 'en' | 'ja';

export async function getDictionary(locale: Locale, ...names: string[]) {
  const imports = await Promise.all(
    names.map((n) => import(`../locales/${locale}/${n}.json`).then((m) => m.default))
  );
  return Object.fromEntries(names.map((n, i) => [n, imports[i]]));
}
