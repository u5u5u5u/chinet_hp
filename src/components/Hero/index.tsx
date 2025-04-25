"use client";

import { usePathname } from "next/navigation";
import { heroNavigation } from "./navigation";

const Hero = () => {
  const url = usePathname();
  const navigation = heroNavigation.find((nav) => {
    const href = nav.href;
    return url.startsWith(href);
  });
  if (!navigation) return null;

  return (
    <div className="flex flex-col justify-center items-center h-[40vh] space-y-3 bg-gradient-to-br from-[#5260FF] to-[#03FF4E] text-white">
      <h2 className="text-4xl md:text-7xl">{navigation?.title}</h2>
      <h3 className="text-lg md:text-xl">- {navigation?.sub_title} -</h3>
    </div>
  );
};

export default Hero;
