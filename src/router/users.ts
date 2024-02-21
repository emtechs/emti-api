import { Router } from 'express'
import { profileUserController, updateUserController } from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { UserUpdateSchema } from '../schemas'

export const userRouter = Router()

userRouter.get('/profile', verifyUserIsAuthenticated, profileUserController)

userRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(UserUpdateSchema),
  updateUserController,
)
