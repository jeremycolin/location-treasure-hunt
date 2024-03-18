import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>{`Lovers's location`}</p>
      <p className={styles.description}>
        {`In the neighborhood of Prenzlauer Berg, perched high above the rooftops, a silent guardian, holding within its sturdy frame the essence of life, a treasure more precious than gold yet as common as the air we breathe, serving the land below without rest or reward, its silhouette a constant on the horizon, a beacon of sustenance and survival in the simplest of forms. Can you find me?`}
      </p>
    </main>
  );
}
