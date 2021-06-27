import ErrorMessage from "components/ErrorMessage"
import LoadingSpinner from "components/LoadingSpinner"
import GroupSearchBar from "features/areasOverview/GroupSearchBar"
import { Group } from "utils/types"
import useFetchGroups from "utils/useFetchGroups"
import styles from "../styles/Basic.module.css"

export default function Index() {
  // TODO: Add pagination and filter
  const { groups, groupsCount, fetchGroupsError, loadingGroups } =
    useFetchGroups()

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

          {!groups.length && loadingGroups && (
            <section className="firstLoad">
              <LoadingSpinner size="md-36" />
            </section>
          )}

          {fetchGroupsError && (
            <ErrorMessage
              title="Ha ocurrido un error conectando con la base de datos"
              description="Vuelve a intentarlo o contacta con el administrador."
              details={fetchGroupsError}
            />
          )}
          {groups &&
            groups.map((group: Group) => (
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

          // First load spinner
          .firstLoad {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}
