import { Collection, Db } from "mongodb"

export class GroupsDAO {
  private collection: Collection

  constructor(db: Db) {
    this.collection = db.collection("groups")
  }
}
