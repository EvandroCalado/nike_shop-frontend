import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Categories', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
];

const subMenuData = [
  { id: 1, name: 'Jordan', doc_count: 11 },
  { id: 2, name: 'Sneakers', doc_count: 8 },
  { id: 3, name: 'Running shoes', doc_count: 64 },
  { id: 4, name: 'Football shoes', doc_count: 107 },
];

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuMobile({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
}: MenuProps) {
  return (
    <ul className="absolute left-0 top-[50px] flex h-[calc(100vh-50px)] w-full flex-col border-t bg-white font-bold text-black md:hidden">
      {data.map((item) => (
        <Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="relative flex cursor-pointer flex-col border-b px-5 py-4"
              onClick={() => setShowCatMenu(!showCatMenu)}
            >
              <div className="flex items-center justify-between">
                {item.name}
                <ChevronDown size={14} />
              </div>

              {showCatMenu && (
                <ul className="-mx-5 -mb-4 mt-4 bg-black/[0.05]">
                  {subMenuData.map((item) => (
                    <Link
                      href="/"
                      key={item.id}
                      onClick={() => [
                        setShowCatMenu(false),
                        setMobileMenu(false),
                      ]}
                    >
                      <li className="flex justify-between border-t px-4 py-4">
                        {item.name}
                        <span className="text-sm opacity-50">10</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="border-b px-5 py-4">
              <Link href={item?.url || ''} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}
