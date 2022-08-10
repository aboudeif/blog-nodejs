import express from 'express'
import UserHandler from '../handlers/user.handlers'

const userRouter = express.Router()
const userHandler = new UserHandler()

userRouter.post('/login',signinValidation, userHandler.login)
userRouter.post('/register',registerValidation, userHandler.register)

export default userRouter