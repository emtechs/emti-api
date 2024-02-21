import { z } from 'zod'
import { CountyCreateSchema, CountyUpdateSchema } from '../schemas'

export type ICountyRequest = z.infer<typeof CountyCreateSchema>

export type ICountyUpdateRequest = z.infer<typeof CountyUpdateSchema>
