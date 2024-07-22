import styles from "./page.module.scss";
import Header from "@/components/Header";
import News from "@/components/News";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <News />
    </main>
  );
}
