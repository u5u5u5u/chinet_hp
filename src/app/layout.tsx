import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import "./globals.css";
import { Mochiy_Pop_One } from "next/font/google";

export const metadata: Metadata = {
  title: "地球っ子ネットワーク",
  description:
    "九州工業大学情報工学部のサークル「地球っ子ネットワーク」の公式サイトです。",
};

const font = Mochiy_Pop_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mochiy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${font.variable} font-mochiy`}>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
