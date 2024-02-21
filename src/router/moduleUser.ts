import { Router } from 'express'
import {
  createModuleUserController,
  deleteModuleUserController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ModuleUserCreateSchema } from '../schemas'

export const moduleUserRouter = Router()

moduleUserRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleUserCreateSchema),
  createModuleUserController,
)

moduleUserRouter.delete(
  '/:id',
  verifyUserIsAuthenticated,
  deleteModuleUserController,
)
