import GroupSearchBar from "features/areasOverview/GroupSearchBar"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { Reducer, useReducer } from "react"
import { connectToDb, getClient } from "server/db"
import { GroupsDAO } from "server/GroupsDAO"
import { Group, OverviewState } from "utils/types"
import styles from "../styles/Basic.module.css"

interface UpdateGroupsAction {
  type: "updateGroups"
  payload: Group[]
}

export default function Admin(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  if (props.state == undefined) {
    return (
      <div className={styles.container}>
        <p>
          Ha ocurrido un error conectando con la base de datos.
          {props.error?.message}
        </p>
      </div>
    )
  }

  const [state, dispatch] = useReducer<
    Reducer<OverviewState, UpdateGroupsAction>
  >((state, action) => {
    switch (action.type) {
      case "updateGroups":
        return {
          ...state,
          groups: action.payload,
        }
    }
  }, props.state)

  return (
    <div className={styles.container}>
      <main>
        <header>
          <h1 className={styles.title}>Administración</h1>
        </header>
        <section>
          <header className="groupsHeader">
            <h2>Grupos</h2>
            <GroupSearchBar />
          </header>
          {state.groups &&
            state.groups.map((group: Group) => (
              <div key={group._id}>{group.name}</div>
            ))}
        </section>
      </main>

      <style jsx>
        {`
          .groupsHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  state?: OverviewState
  error?: Error
}> = async () => {
  const client = getClient()
  try {
    const db = await connectToDb(client)
    const groupsDAO = new GroupsDAO(db)

    const groups = await groupsDAO.getGroups()
    return {
      props: { state: groups },
    }
  } catch (error) {
    return {
      props: { error },
    }
  } finally {
    await client.close()
  }
}
