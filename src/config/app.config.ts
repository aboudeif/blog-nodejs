import dotenv from 'dotenv'

dotenv.config()

const appConfig = {
  name: process.env.APP_NAME,
  enviroment: process.env.NODE_ENV,
  url: process.env.APP_URL,
  port: process.env.APP_PORT,
  bcryptSalt: Number(process.env.BCRYPT_ROUNDS),
  bcryptPaper: process.env.BCRYPT_PAPER,
  jwtSecret: process.env.JWT_SECRET
}

export default appConfig