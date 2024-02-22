import { Router } from 'express'
import {
  createModuleUserController,
  deleteModuleUserController,
  listModuleUserController,
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

moduleUserRouter.get('', verifyUserIsAuthenticated, listModuleUserController)

moduleUserRouter.delete(
  '/:id',
  verifyUserIsAuthenticated,
  deleteModuleUserController,
)
