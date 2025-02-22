import Header from "@/components/Header";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  console.log("MICROCMS_SERVICE_DOMAIN", process.env.MICROCMS_SERVICE_DOMAIN);

  return (
    <main>
      <Header />
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
