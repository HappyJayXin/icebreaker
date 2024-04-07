import Image from "next/image";
import logo from "@/public/images/logo_life_decider.png";

const Header = () => {
  return (
    <header className='flex items-center justify-start bg-primary p-4'>
      <div>
        <Image src={logo} alt='Life Decider Logo' width={60} height={60} />
      </div>
    </header>
  );
};

export default Header;
