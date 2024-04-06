import { Noto_Sans } from 'next/font/google';
import './globals.css';

import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';

import Header from '@/app/[lng]/components/Header';
import Footer from '@/app/[lng]/components/Footer';

import { Providers } from '@/redux/provider';
import { useTranslation } from '@/app/i18n';

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'fallback',
  variable: '--font-noto-sans',
});

export const generateMetadata = async ({ params }) => {
  const { t } = await useTranslation();
  return {
    title: t('app_title'),
    description: t('app_desc'),
    authors: [{ name: 'Jay Chen', url: 'https://github.com/HappyJayXin' }],
  };
};

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

const RootLayout = async ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={notoSans.variable}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
