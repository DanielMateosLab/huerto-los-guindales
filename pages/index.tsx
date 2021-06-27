import GroupSearchBar from "features/areasOverview/GroupSearchBar"
import { Group } from "utils/types"
import useFetchGroups from "utils/useFetchGroups"
import styles from "../styles/Basic.module.css"

export default function Index() {
  // TODO: Add error and loading messages. Then add pagination and filter
  const { groups, groupsCount } = useFetchGroups()

  return (
    <div className={styles.container}>
      <main>
        <header>
          <h1 className={styles.title}>Huerto Los Guindales</h1>
        </header>
        <section>
          <header className="groupsHeader">
            <h2>Grupos {`(${groupsCount})`}</h2>
            <GroupSearchBar />
          </header>
          {groups &&
            groups.map((group: Group) => (
              <div key={group._id.toHexString()}>{group.name}</div>
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
