import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huerto Los Guindales</title>
        <meta
          name="description"
          content="Aplicación para la gestión de los cultivos de Los Guindales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Huerto Los Guindales</h1>
      </main>
    </div>
  )
}
