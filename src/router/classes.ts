import { Router } from 'express'
import {
  createClassController,
  deleteClassController,
  listClassController,
  retrieveClassController,
  updateClassController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyIsSuper,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { ClassCreateSchema, ClassUpdateSchema } from '../schemas'

export const classRouter = Router()

classRouter.post(
  '',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  validateSchemaMiddleware(ClassCreateSchema),
  createClassController,
)

classRouter.get('', verifyUserIsAuthenticated, listClassController)

classRouter.get('/:id', verifyUserIsAuthenticated, retrieveClassController)

classRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  validateSchemaMiddleware(ClassUpdateSchema),
  updateClassController,
)

classRouter.delete(
  '/:id',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  deleteClassController,
)
