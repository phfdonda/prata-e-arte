import Head from "next/head";
import CSVReader from "../components/CsvReader/CsvReader";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prata e Arte - Compilador de Posts</title>
        <meta
          name="description"
          content="Compilador de Posts para o cliente Prata e Arte"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Compilador de Posts <br />
          para Prata e Arte
        </h1>
        <p className={styles.description}>Adicione o CSV e receba os posts</p>
        <CSVReader></CSVReader>
      </main>
    </div>
  );
}
