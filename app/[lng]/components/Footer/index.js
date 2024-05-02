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
    <footer className='flex flex-wrap items-center justify-between bg-primary p-4'>
      <div className='flex items-center space-x-4'>
        <select
          className='select select-bordered w-full max-w-xs'
          onChange={(e) => handleChangeLanguage(e.target.value)}
          value={lng}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {languageOptions[language].label}
            </option>
          ))}
        </select>

        <a href='https://github.com/HappyJayXin' target='_blank' className='link-hover link'>
          GitHub
        </a>
      </div>

      <article class='prose'>
        <p>© {currentYear} Jay Chen. All rights reserved.</p>
      </article>
    </footer>
  );
};

export default Footer;
