"use client";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-[100000] w-full h-24 bg-white/10">
        <Image
          src="/images/chinet-icon.png"
          alt="Logo"
          width={100}
          height={100}
          priority
          className="absolute top-0 left-0 -z-10 m-4 h-16 w-auto rounded-full opacity-30"
        />
        <div className="flex items-center justify-between h-full text-white p-6">
          <h1 className="text-2xl md:text-3xl font-extrabold ml-4">
            地球っ子ネットワーク
          </h1>
          <button
            className="md:hidden block focus:outline-none z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-8 h-6">
              <span
                className={`absolute block w-8 h-1 bg-white transform transition-transform duration-300 ${
                  isOpen ? "rotate-45 top-2.5 bg-black" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute block w-8 h-1 bg-white transform transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "top-2.5"
                }`}
              ></span>
              <span
                className={`absolute block w-8 h-1 bg-white transform transition-transform duration-300 ${
                  isOpen ? "-rotate-45 top-2.5 bg-black" : "top-5"
                }`}
              ></span>
            </div>
          </button>
          <nav
            className={`fixed top-0 right-0 h-full text-black transform ${
              isOpen ? "w-full bg-white/70 translate-x-0" : "translate-x-full"
            } transition-transform duration-500 max-md:pt-24 md:static md:transform-none md:flex md:items-center md:gap-8 md:text-white`}
          >
            <ul className="flex flex-col items-center gap-4 p-4 md:flex-row md:p-0 font-bold">
              <li className="font-bold hover:underline">
                <ScrollLink
                  to="greeting"
                  smooth={true}
                  duration={500}
                  offset={-96}
                  onClick={closeMenu}
                >
                  ご挨拶
                </ScrollLink>
              </li>
              <li className="font-bold hover:underline">
                <ScrollLink
                  to="activities"
                  smooth={true}
                  duration={500}
                  offset={-96}
                  onClick={closeMenu}
                >
                  活動内容
                </ScrollLink>
              </li>
              <li className="font-bold hover:underline">
                <Link href="news" onClick={closeMenu}>
                  お知らせ
                </Link>
              </li>
              <li className="font-bold hover:underline">
                <ScrollLink
                  to="information"
                  smooth={true}
                  duration={500}
                  offset={-96}
                  onClick={closeMenu}
                >
                  団体情報
                </ScrollLink>
              </li>
              <li className="font-bold hover:underline">
                <Link href="contact" onClick={closeMenu}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
