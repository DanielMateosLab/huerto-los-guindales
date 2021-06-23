import { GetServerSideProps } from "next"
import connectToDb from "server/connectToDb"
import styles from "../styles/Basic.module.css"

export default function Admin() {
  return (
    <div className={styles.container}>
      <main>
        <header>
          <h1 className={styles.title}>Administración</h1>
        </header>
        <section>
          <h2>Grupos</h2>
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { db } = await connectToDb()
  } catch (error) {}
}
