import dotenv from 'dotenv'

dotenv.config()

const database = process.env.ENVIROMENT == 'dev' ? process.env.POSTGRES_DATABASE : process.env.POSTGRES_TEST_DATABASE

const databaseConfig = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as unknown as number,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: database
}

export default databaseConfig