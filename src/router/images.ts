import { Router } from 'express'
import { createImageController } from '../controllers'
import { upload } from '../lib'
import { verifyUserIsAuthenticated } from '../middlewares'

export const imageRouter = Router()

imageRouter.post(
  '',
  verifyUserIsAuthenticated,
  upload.single('image'),
  createImageController,
)
