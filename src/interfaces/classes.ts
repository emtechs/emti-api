import { z } from 'zod'
import { ClassCreateSchema, ClassUpdateSchema } from '../schemas'

export type IClassRequest = z.infer<typeof ClassCreateSchema>

export type IClassUpdateRequest = z.infer<typeof ClassUpdateSchema>
