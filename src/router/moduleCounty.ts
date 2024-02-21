import { Router } from 'express'
import {
  createModuleCountyController,
  deleteModuleCountyController,
  listModuleCountyController,
  updateModuleCountyController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ModuleCountyCreateSchema, ModuleCountyUpdateSchema } from '../schemas'

export const moduleCountyRouter = Router()

moduleCountyRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleCountyCreateSchema),
  createModuleCountyController,
)

moduleCountyRouter.get(
  '',
  verifyUserIsAuthenticated,
  listModuleCountyController,
)

moduleCountyRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(ModuleCountyUpdateSchema),
  updateModuleCountyController,
)

moduleCountyRouter.delete(
  '/:id',
  verifyUserIsAuthenticated,
  deleteModuleCountyController,
)
