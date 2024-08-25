import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo_life_decider.png";

const Header = () => (
  <header className="navbar bg-base-300">
    <Link href="/" legacyBehavior>
      <a className="btn btn-ghost text-xl">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </a>
    </Link>
  </header>
);

export default Header;
