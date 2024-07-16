import styles from "./page.module.scss";
import News from "@/components/News/News";
export default function Home() {
  return (
    <main className={styles.main}>
      <News />
    </main>
  );
}
