import { Db } from "mongodb"
import { Group } from "utils/types"
import CollectionDAO from "./CollectionDAO"

export class GroupsDAO extends CollectionDAO<Group> {
  constructor(db: Db) {
    super(db, "groups")
  }

  async getGroups(): Promise<{ groupsCount: number; groups: Group[] }> {
    const cursor = this.collection.find().sort({ name: 1 }).limit(10)

    const groupsCount = await cursor.count()
    const groups = await cursor.toArray()

    return { groups, groupsCount }
  }
}
