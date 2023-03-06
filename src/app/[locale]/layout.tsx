import {useLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export async function generateMetadata() {
  const t = await getTranslations('Meta');

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({children}: Props) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
