import { Router } from 'express'
import {
  createSessionController,
  recoveryPasswordController,
  refreshSessionController,
  updatePasswordController,
  verifyPasswordController,
} from '../controllers'
import {
  validateSchemaMiddleware,
  verifyUserIsAuthenticated,
} from '../middlewares'
import {
  PasswordUpdateSchema,
  PasswordVerifySchema,
  RecoveryPasswordSchema,
  SessionSchema,
} from '../schemas'

export const sessionRouter = Router()

sessionRouter.post(
  '',
  validateSchemaMiddleware(SessionSchema),
  createSessionController,
)

export const tokenRouter = Router()

tokenRouter.post('/:token', refreshSessionController)

export const passwordRouter = Router()

passwordRouter.post(
  '',
  validateSchemaMiddleware(RecoveryPasswordSchema),
  recoveryPasswordController,
)

passwordRouter.patch(
  '',
  validateSchemaMiddleware(PasswordUpdateSchema),
  updatePasswordController,
)

passwordRouter.post(
  '/verify',
  verifyUserIsAuthenticated,
  validateSchemaMiddleware(PasswordVerifySchema),
  verifyPasswordController,
)
