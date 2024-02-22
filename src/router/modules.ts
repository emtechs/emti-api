import { Router } from 'express'
import {
  createModuleController,
  deleteModuleController,
  listModuleController,
  retrieveModuleController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ModuleCreateSchema } from '../schemas'

export const moduleRouter = Router()

moduleRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleCreateSchema),
  createModuleController,
)

moduleRouter.get('', verifyUserIsAuthenticated, listModuleController)

moduleRouter.get('/:id', verifyUserIsAuthenticated, retrieveModuleController)

moduleRouter.delete('/:id', verifyUserIsAuthenticated, deleteModuleController)
