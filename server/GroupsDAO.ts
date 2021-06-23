import { Collection, Db } from "mongodb"
import { Group } from "utils/types"

export class GroupsDAO {
  private collection: Collection<Group>

  constructor(db: Db) {
    this.collection = db.collection<Group>("groups")
  }

  async getGroups() {
    const groups = await this.collection
      .find()
      .sort({ name: 1 })
      .limit(10)
      .toArray()

    return groups.map((group) => ({ ...group, _id: group._id.toString() }))
  }
}
