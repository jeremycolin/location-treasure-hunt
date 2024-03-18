import { Distance } from "./Distance";
import styles from "./page.module.css";

const TITLE = `Lovers's location`;
const DESCRIPTION = `In the neighborhood of Prenzlauer Berg, perched high above the rooftops, a silent guardian, holding within its sturdy frame the essence of life, a treasure more precious than gold yet as common as the air we breathe, serving the land below without rest or reward, its silhouette a constant on the horizon, a beacon of sustenance and survival in the simplest of forms. Can you find me?`;
const LATLONG = { lat: 52.53419809133645, lon: 13.418650346843192 };

export default function Page({
  params,
}: {
  params: { id: string; step: string };
}) {
  const locationFound = false;

  return (
    <main className={styles.main}>
      <p className={styles.title}>{TITLE}</p>
      <p className={styles.description}>{DESCRIPTION}</p>
      {locationFound ? "GG" : <Distance target={LATLONG} />}
    </main>
  );
}
