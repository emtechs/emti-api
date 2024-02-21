import { Router } from 'express'
import {
  createCountyController,
  deleteCountyController,
  listCountyController,
  retrieveCountyController,
  updateCountyController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import { CountyCreateSchema, CountyUpdateSchema } from '../schemas'

export const countyRouter = Router()

countyRouter.post(
  '',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CountyCreateSchema),
  createCountyController,
)

countyRouter.get('', verifyUserIsAuthenticated, listCountyController)

countyRouter.get('/:id', verifyUserIsAuthenticated, retrieveCountyController)

countyRouter.patch(
  '/:id',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(CountyUpdateSchema),
  updateCountyController,
)

countyRouter.delete('/:id', verifyUserIsAuthenticated, deleteCountyController)
