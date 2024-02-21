import { Router } from 'express'
import {
  createModuleController,
  deleteModuleController,
  listModuleController,
  retrieveModuleController,
  updateModuleController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ModuleCreateSchema, ModuleUpdateSchema } from '../schemas'

export const moduleRouter = Router()

moduleRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleCreateSchema),
  createModuleController,
)

moduleRouter.get('', verifyUserIsAuthenticated, listModuleController)

moduleRouter.get('/:id', verifyUserIsAuthenticated, retrieveModuleController)

moduleRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleUpdateSchema),
  updateModuleController,
)

moduleRouter.delete('/:id', verifyUserIsAuthenticated, deleteModuleController)
