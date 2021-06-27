import { MethodNotAllowedError } from "@danielmat/api-utils"
import catchErrors from "@danielmat/api-utils/dist/catchErrors"
import { NextApiHandler } from "next"
import { connectToDb } from "server/db"
import { GroupsDAO } from "server/GroupsDAO"
import { GroupsResponse } from "utils/types"

const handler: NextApiHandler<GroupsResponse> = async (req, res) => {
  if (req.method === "GET") {
    const db = await connectToDb()
    const groupsDAO = new GroupsDAO(db)

    const result = await groupsDAO.getGroups()
    res.status(200).json({
      status: "success",
      payload: result,
    })
  } else {
    throw new MethodNotAllowedError()
  }
}

export default catchErrors(handler)
