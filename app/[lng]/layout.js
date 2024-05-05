import { Noto_Sans } from "next/font/google";
import "./globals.css";

import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

import Header from "@/app/[lng]/components/Header";
import Footer from "@/app/[lng]/components/Footer";

import { Providers } from "@/redux/provider";
import { useTranslation } from "@/app/i18n";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-noto-sans",
});

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

export const generateMetadata = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return {
    title: t("app_title"),
    description: t("app_desc"),
    authors: [{ name: "Jay Chen", url: "https://github.com/HappyJayXin" }],
  };
};

const RootLayout = async ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)} data-theme="cupcake">
      <head />
      <body className={`${notoSans.variable} flex h-screen flex-col`}>
        <Providers>
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
