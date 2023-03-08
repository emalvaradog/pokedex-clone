import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Pokedex } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Pokedex />
      </main>
    </>
  );
}
