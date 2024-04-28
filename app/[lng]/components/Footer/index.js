'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n';
import { languages, languageOptions } from '@/app/i18n/settings';

const Footer = ({ lng }) => {
  const currentYear = new Date().getFullYear();

  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation(lng, 'common');

  const handleChangeLanguage = (selectedLang) => {
    const newURL = pathname.replace(lng, selectedLang);
    router.push(newURL);
  };

  return (
    <footer className='flex flex-wrap items-center justify-between bg-secondary p-4'>
      <div className='flex items-center space-x-4'>
        <select
          onChange={(e) => handleChangeLanguage(e.target.value)}
          value={lng}
          className='focus:shadow-outline h-10 rounded-md border border-gray-300 bg-white pl-3 pr-6 text-base text-gray-700 placeholder-gray-600'
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {languageOptions[language].label}
            </option>
          ))}
        </select>

        <a href='https://github.com/HappyJayXin' target='_blank' className='font-medium'>
          GitHub
        </a>
      </div>

      <div className='font-medium'>© {currentYear} Jay Chen. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
