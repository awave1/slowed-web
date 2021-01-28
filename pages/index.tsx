import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>slowed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>TODO</main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/awave1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by awave
        </a>
      </footer>
    </div>
  );
}
