export interface Group {
  _id: string
  name: string
}

export interface OverviewState {
  // nameFilter
  groupsCount: number
  groups: Group[]
}
