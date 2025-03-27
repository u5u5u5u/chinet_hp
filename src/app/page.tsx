import About from "@/components/About";
import Activities from "@/components/Activities";
import Information from "@/components/Information";
import MainVisual from "@/components/MainVisual";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <MainVisual />
      <About />
      <Activities />
      <News />
      <Information />
      <ul>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/microcms-test">microcms test</Link>
        </li>
      </ul>
    </main>
  );
}
