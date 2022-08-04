import databaseConfig from "./config/database.config";
import { Pool } from 'pg'

const db = new Pool({
  host: databaseConfig.host,
  port: databaseConfig.port,
  user: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseConfig.database
})

export default db