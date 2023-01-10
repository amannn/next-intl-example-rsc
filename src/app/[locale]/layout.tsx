import {useLocale} from 'next-intl';
import {ReactNode} from 'react';
import i18n from '../../i18n';

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children}: Props) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <head>
        <title>next-intl</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>{children}</body>
    </html>
  );
}
