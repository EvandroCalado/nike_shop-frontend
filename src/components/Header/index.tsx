import { Heart, MenuIcon, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from '../Menu';
import MenuMobile from '../MenuMobile';
import Wrapper from '../Wrapper';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Header' }: HeaderProps) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(0);

  return (
    <header
      className={`sticky top-0 z-20 flex h-14 w-full items-center justify-between bg-white transition-transform duration-300 md:h-20 ${show}`}
    >
      <Wrapper className="flex h-16 items-center justify-between">
        <Link href="/">
          <Image src="/assets/logo.svg" alt="Logo" width={60} height={30} />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        {/* Icons */}
        <div className="flex items-center gap-2 text-black">
          <div className="relative">
            <ShoppingBag className="w-4 md:w-6" />
            <span className="absolute -right-1 top-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 pl-[1px] text-[12px] text-white md:-right-1 md:-top-1 md:h-4 md:w-4 md:text-sm">
              5
            </span>
          </div>

          <div className="relative">
            <Heart className="w-4 md:w-6" />
            <span className="absolute -right-1 top-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 pl-[1px] text-[12px] text-white md:-right-1 md:-top-1 md:h-4 md:w-4 md:text-sm">
              5
            </span>
          </div>

          {mobileMenu ? (
            <X
              className="w-4 cursor-pointer md:hidden md:w-6"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <MenuIcon
              className="w-4 cursor-pointer md:hidden md:w-6"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
}
