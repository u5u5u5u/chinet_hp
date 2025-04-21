"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navigation } from "./navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isTopPage = pathname === "/";

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
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-extrabold ml-4">
              地球っ子ネットワーク
            </h1>
          </Link>
          <button
            className="md:hidden block focus:outline-none z-10"
            onClick={() => {
              setIsOpen(!isOpen);
              console.log(isOpen);
            }}
          >
            <div className="relative w-8 h-6">
              <span
                className={`absolute block w-8 h-1 transform transition-transform duration-1000 ${
                  isOpen ? "rotate-45 top-2.5 bg-black" : "top-0 bg-white"
                }`}
              ></span>
              <span
                className={`absolute block w-8 h-1 transform transition-opacity duration-1000 ${
                  isOpen ? "opacity-0" : "top-2.5 bg-white"
                }`}
              ></span>
              <span
                className={`absolute block w-8 h-1 transform transition-transform duration-1000 ${
                  isOpen ? "-rotate-45 top-2.5 bg-black" : "top-5 bg-white"
                }`}
              ></span>
            </div>
          </button>
          <nav
            className={`fixed top-0 right-0 h-full text-black transform transition-all duration-1000 ease-in-out ${
              isOpen
                ? "w-full bg-white/70 translate-x-0"
                : "max-md:w-full translate-x-full bg-transparent max-md:opacity-0"
            } max-md:pt-24 md:static md:transform-none md:flex md:items-center md:gap-8 md:text-white`}
          >
            <ul className="flex flex-col items-center gap-4 md:flex-row md:p-0 font-bold">
              {navigation.map((nav) => (
                <li key={nav.name}>
                  {nav.inTopPage && isTopPage ? (
                    <ScrollLink
                      to={nav.href}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onClick={closeMenu}
                    >
                      {nav.name}
                    </ScrollLink>
                  ) : nav.inTopPage ? (
                    <Link href={`/#${nav.href}`} onClick={closeMenu}>
                      {nav.name}
                    </Link>
                  ) : (
                    <Link href={`/${nav.href}`} onClick={closeMenu}>
                      {nav.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
