import { ApiResponse } from "@danielmat/api-utils"
import { ObjectId } from "mongodb"

export interface Group {
  _id: ObjectId
  name: string
}

export interface OverviewState {
  groupsCount: number
  groups: Group[]
}

export type GroupsResponse = ApiResponse<{
  payload: { groupsCount: number; groups: Group[] }
}>
