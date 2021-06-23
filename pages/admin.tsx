import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { connectToDb, getClient } from "server/db"
import { GroupsDAO } from "server/GroupsDAO"
import { Group } from "utils/types"
import styles from "../styles/Basic.module.css"

export default function Admin(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props)
  return (
    <div className={styles.container}>
      <main>
        <header>
          <h1 className={styles.title}>Administración</h1>
        </header>
        <section>
          <h2>Grupos</h2>
          {props.groups &&
            props.groups.map((group: Group) => (
              <div key={group._id}>{group.name}</div>
            ))}
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  groups?: any
  error?: any
}> = async () => {
  const client = getClient()
  try {
    const db = await connectToDb(client)
    const groupsDAO = new GroupsDAO(db)

    const groups = await groupsDAO.getGroups()
    return {
      props: { groups },
    }
  } catch (error) {
    return {
      props: { error },
    }
  } finally {
    await client.close()
  }
}
