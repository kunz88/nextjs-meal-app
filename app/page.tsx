
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world</h1>
        <p><Link href='/community'>Community</Link></p>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
