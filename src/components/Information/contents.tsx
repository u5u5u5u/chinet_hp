import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InformationContentsProps {
  title: string;
  detail: string | React.ReactNode;
}

export const InformationContents: InformationContentsProps[] = [
  {
    title: "団体名",
    detail: "地球っ子ネットワーク",
  },
  {
    title: "設立",
    detail: "1998年4月19日",
  },
  {
    title: "代表者",
    detail: "陣内 勇冴",
  },
  {
    title: "SNS",
    detail: (
      <div className="flex space-x-4">
        <Link
          href="https://www.instagram.com/chinet_kit?igsh=OHhqNGhmemg0c2ts"
          target="_blank"
        >
          <Image
            src="/icons/instagram.svg"
            width={40}
            height={40}
            alt="Instagram"
          />
        </Link>
        <Link href="https://x.com/chinet_kit" target="_blank">
          <img src="/icons/x.svg" alt="X" className="w-[40px] h-auto" />
        </Link>
      </div>
    ),
  },
];
