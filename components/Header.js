import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import NavMobile from './NavMobile';

import { HiMenu } from 'react-icons/hi';

const Header = ({ headerData: { logoImgV1, logoImgV2, btnText }, navData }) => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      // set the header state according to scrollY position
      /* if the current vertical scroll position of the window is greater than 80 pixels. */
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header
          ? 'bg-white px-3 py-3 rounded-md drop-shadow-primary'
          : 'py-[40px]'
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] flex justify-between items-center transition-all duration-500 rounded-md`}
    >
      <Link href={'/'}>
        <a>
          <Image
            src={`${header ? logoImgV2 : logoImgV1}`}
            width={header ? 180 : 212}
            height={50}
            alt=""
          />
        </a>
      </Link>
      <div className="hidden lg:flex gap-x-[96px]">
        <Nav navData={navData} header={header} />
        <button className="btn">{btnText}</button>
      </div>
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden cursor-pointer"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>

      <div
        className={`${
          navMobile ? 'max-h-[154px]' : 'max-h-0'
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  );
};

export default Header;
