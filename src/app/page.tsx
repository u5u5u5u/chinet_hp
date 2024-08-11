import styles from "./page.module.scss";
import Header from "@/components/Header";
import News from "@/components/News";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <News />
      <Link href="/contact">contact</Link>
    </main>
  );
}
