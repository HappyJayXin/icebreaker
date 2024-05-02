import Image from 'next/image';
import logo from '@/public/images/logo_life_decider.png';

const Header = () => {
  return (
    <header className='navbar bg-base-300'>
      <a className='btn btn-ghost text-xl'>
        <Image src={logo} alt='Logo' width={50} height={50} />
      </a>
    </header>
  );
};

export default Header;
