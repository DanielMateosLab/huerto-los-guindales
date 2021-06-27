import { useEffect, useState } from "react"
import { Group, GroupsResponse } from "./types"

const useFetchGroups = () => {
  let [loadingGroups, setLoading] = useState(false)
  let [fetchGroupsError, setError] = useState<string | undefined>(undefined)
  let [groupsData, setGroupsData] = useState({
    groupsCount: 0,
    groups: [] as Group[],
  })

  useEffect(() => {
    ;(async () => {
      setLoading(true)

      try {
        const res = await fetch("/api/groups").then(
          (r) => r.json() as unknown as GroupsResponse
        )

        if (res.status == "success") {
          setGroupsData(res.payload)
        } else {
          throw new Error(res.message)
        }
      } catch (e) {
        console.log(e)
        setError(e.message || "")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {
    loadingGroups,
    fetchGroupsError,
    groupsCount: groupsData.groupsCount,
    groups: groupsData.groups,
  }
}

export default useFetchGroups
