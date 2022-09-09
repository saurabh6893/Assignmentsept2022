import express from 'express'
import {
  createPost,
  deletePost,
  getTimelinePosts,
  likePost,
} from '../Controllers/PostController.js'
const router = express.Router()

router.post('/', createPost)

router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id/timeline', getTimelinePosts)
export default router
