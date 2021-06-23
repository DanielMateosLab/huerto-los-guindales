import { MongoClient } from "mongodb"
import { MissingEnvVarError } from "utils/errors"

/**
 *  In order to connect to the db we have to:
 *  - 1: get the client and store it in a variable, so we can close the connection after
 *    the operations. Use 'getClient()'.
 *  - 2: connect to the db with 'connectToDb()', passing the created client.
 */

/**
 * getClient(): it is important to close the returned client connection after
 *  operations are done. Use `client.close()`
 */
export function getClient(): MongoClient {
  const DB_URI = getDbURI()

  const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return client
}

function getDbURI(): string {
  const DB_URI = process.env.DB_URI

  if (DB_URI == undefined) {
    throw new MissingEnvVarError("DB_URI")
  }

  return DB_URI
}

// Connect to db
export async function connectToDb(client: MongoClient) {
  const DB_NAME = getDbName()

  await client.connect()

  return client.db(DB_NAME)
}

function getDbName(): string {
  const DB_NAME = process.env.NODE_ENV == "test" ? "test" : process.env.DB_NAME

  if (DB_NAME == undefined) {
    throw new MissingEnvVarError("DB_NAME")
  }

  return DB_NAME
}
