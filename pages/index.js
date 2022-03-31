import Head from "next/head";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const Input = styled("input")({
    display: "none",
  });

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

        <label htmlFor="contained-button-file">
          <Input
            accept=".csv"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept=".csv" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          ></IconButton>
        </label>
      </main>
    </div>
  );
}
