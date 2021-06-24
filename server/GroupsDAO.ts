import { Collection, Db } from "mongodb"
import { Group } from "utils/types"

export class GroupsDAO {
  private collection: Collection<Group>

  constructor(db: Db) {
    this.collection = db.collection<Group>("groups")
  }

  async getGroups(): Promise<{ groupsCount: number; groups: Group[] }> {
    const cursor = this.collection.find().sort({ name: 1 }).limit(10)

    const groupsCount = await cursor.count()
    const groups = await cursor
      .toArray()
      .then((result) =>
        result.map((group) => ({ ...group, _id: group._id.toString() }))
      )

    return { groups, groupsCount }
  }
}
