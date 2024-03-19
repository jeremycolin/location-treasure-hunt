import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>{`Let's play!`}</p>
    </main>
  );
}
