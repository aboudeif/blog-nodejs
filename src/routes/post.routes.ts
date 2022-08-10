import express from 'express'
import PostHandler from '../handlers/post.handlers'


const postRouter = express.Router()
const postHandler = new PostHandler()

// get all posts
postRouter.get('/',postHandler.index)

// show post by id
postRouter.get('/:id',postHandler.show)

// create post
postRouter.post('/',postHandler.create)

// update post
postRouter.put('/:id',postHandler.update)

// delete post
postRouter.delete('/:id',postHandler.delete)

export default postRouter
