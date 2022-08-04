import express from 'express'
import post from './post.routes'

const router = express.Router()

router.use('/posts', post)

router.get('/', (req, res) => {
  res.send('Hello World!')
})

export default router