import styles from "./page.module.scss";
import Header from "@/components/Header";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
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
