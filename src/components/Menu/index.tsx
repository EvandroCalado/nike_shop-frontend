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
}

export default function Menu({ showCatMenu, setShowCatMenu }: MenuProps) {
  return (
    <ul className="hidden items-center gap-8 text-black md:flex">
      {data.map((item) => (
        <Fragment key={item.id}>
          {item?.subMenu ? (
            <li
              className="relative flex cursor-pointer items-center gap-2"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item.name}
              <ChevronDown size={14} />

              {showCatMenu && (
                <ul className="absolute left-0 top-6 min-w-48 bg-white px-1 py-1 text-black shadow-lg">
                  {subMenuData.map((item) => (
                    <Link
                      href="/"
                      key={item.id}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="flex h-12 items-center justify-between rounded-md px-3 hover:bg-black/[0.03]">
                        {item.name}
                        <span className="text-sm opacity-50">10</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={item?.url || ''}>{item.name}</Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}
