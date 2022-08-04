import express from 'express'
import cors from 'cors'
import appConfig from './config/app.config'
import routes from './routes'

const app: express.Application = express()
const port = appConfig.port

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/api', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app