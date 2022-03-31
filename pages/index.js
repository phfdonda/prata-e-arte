import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <h1 className={styles.title}>Compilador de Posts para Prata e Arte</h1>

        <p className={styles.description}>Adicione o CSV e receba os posts</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
