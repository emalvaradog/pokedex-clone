import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Pokedex } from "@/components";
import { getPokemons } from "@/services/getPokemons";

export default function Home({ data }: { data: [] }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Pokedex data={data} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await getPokemons(1, 12);

  return {
    props: { data },
  };
}
