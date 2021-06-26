import { ApiResponse, MethodNotAllowedError } from "@danielmat/api-utils"
import catchErrors from "@danielmat/api-utils/dist/catchErrors"
import { NextApiHandler } from "next"
import { connectToDb, getClient } from "server/db"
import { GroupsDAO } from "server/GroupsDAO"
import { Group } from "utils/types"

const handler: NextApiHandler<
  ApiResponse<{ payload: { groupsCount: number; groups: Group[] } }>
> = async (req, res) => {
  if (req.method === "GET") {
    const client = getClient()

    try {
      const db = await connectToDb(client)
      const groupsDAO = new GroupsDAO(db)

      const result = await groupsDAO.getGroups()
      res.status(200).json({
        status: "success",
        payload: result,
      })
    } finally {
      client.close()
    }
  } else {
    throw new MethodNotAllowedError()
  }
}

export default catchErrors(handler)
