import { MongoClient } from "mongodb"
import { MissingEnvVarError } from "utils/errors"
import { ConnectionData } from "utils/types"

const connectToDb = async () => {
  const { DB_NAME, DB_URI } = getConnectionData()

  const client = await new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).connect()

  return {
    db: client.db(DB_NAME),
    client,
  }
}

function getConnectionData(): ConnectionData {
  const DB_URI = process.env.DB_URI
  const DB_NAME = process.env.NODE_ENV == "test" ? "test" : process.env.DB_NAME

  if (DB_URI == undefined) {
    throw new MissingEnvVarError("DB_URI")
  }
  if (DB_NAME == undefined) {
    throw new MissingEnvVarError("DB_NAME")
  }

  return { DB_URI, DB_NAME }
}

export default connectToDb
