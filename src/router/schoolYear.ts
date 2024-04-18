import { Router } from 'express'
import {
  createSchoolYearController,
  deleteSchoolYearController,
  listSchoolYearController,
  retrieveSchoolYearController,
  updateSchoolYearController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyIsSuper,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { SchoolYearCreateSchema, SchoolYearUpdateSchema } from '../schemas'

export const schoolYearRouter = Router()

schoolYearRouter.post(
  '',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  validateSchemaMiddleware(SchoolYearCreateSchema),
  createSchoolYearController,
)

schoolYearRouter.get('', verifyUserIsAuthenticated, listSchoolYearController)

schoolYearRouter.get(
  '/:id',
  verifyUserIsAuthenticated,
  retrieveSchoolYearController,
)

schoolYearRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  validateSchemaMiddleware(SchoolYearUpdateSchema),
  updateSchoolYearController,
)

schoolYearRouter.delete(
  '/:id',
  verifyUserIsAuthenticated,
  verifyIsSuper,
  deleteSchoolYearController,
)
