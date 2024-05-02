'use client';

import { usePathname, useRouter } from 'next/navigation';
import { languages, languageOptions } from '@/app/i18n/settings';

const Footer = ({ lng }) => {
  const currentYear = new Date().getFullYear();

  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (selectedLang) => {
    const newURL = pathname.replace(lng, selectedLang);
    router.push(newURL);
  };

  return (
    <footer className='footer items-center bg-primary p-4 text-base-content'>
      <aside className='grid-flow-col items-center justify-self-center md:justify-self-start'>
        <p>© {currentYear} Jay Chen. All rights reserved.</p>
      </aside>
      <nav className='grid-flow-col gap-4 justify-self-center md:place-self-center md:justify-self-end'>
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
      </nav>
    </footer>
  );
};

export default Footer;
