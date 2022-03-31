import Head from "next/head";
// import { SendButton, UploadButton } from "../components";s
import { useForm } from "react-hook-form";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

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
        <form id="csvForm" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />

          {/* <UploadButton />
          <SendButton /> */}
        </form>
      </main>
    </div>
  );
}
