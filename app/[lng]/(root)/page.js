import { useTranslation } from '@/app/i18n';
import SearchBox from './SearchBox';
import RecentHistory from './RecentHistory';

const HomePage = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, 'common');

  return (
    <div className='hero min-h-full bg-base-200'>
      <div className='hero-content text-center'>
        <div className='flex max-w-md flex-col gap-5'>
          <h1 className='text-5xl font-bold'>{t('home_title')}</h1>
          <SearchBox />
          <RecentHistory />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
