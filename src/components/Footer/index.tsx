"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { navigation } from "../Header/navigation";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  const isTopPage = pathname === "/";

  return (
    <footer className="flex flex-col items-center justify-between space-y-8 h-[40vh] bg-[url('/footer.png')] bg-cover bg-no-repeat bg-opacity-0 pt-32 pb-10 px-4">
      <div className="flex justify-between container mx-auto px-4">
        <div className="space-y-4">
          <p className="text-xl md:text-2xl font-bold">地球っ子ネットワーク</p>
          <Image
            src="/images/chinet-icon.png"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </div>
        <nav>
          <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            {navigation.map((nav) => (
              <li key={nav.name}>
                {nav.inTopPage && isTopPage ? (
                  <ScrollLink
                    to={nav.href}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    {nav.name}
                  </ScrollLink>
                ) : nav.inTopPage ? (
                  <Link href={`/#${nav.href}`}>{nav.name}</Link>
                ) : (
                  <Link href={`/${nav.href}`}>{nav.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="text-xs">&copy; 2025 地球っ子ネットワーク</p>
    </footer>
  );
};

export default Footer;
