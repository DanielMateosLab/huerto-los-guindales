import { ApiResponse } from "@danielmat/api-utils"

export interface Group {
  _id: string
  name: string
}

export interface OverviewState {
  // nameFilter
  groupsCount: number
  groups: Group[]
}

export type GroupsResponse = ApiResponse<{
  payload: { groupsCount: number; groups: Group[] }
}>
