import About from "@/components/About";
import Activities from "@/components/Activities";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <About />
      <Activities />
      <News />
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
