import { z } from 'zod'
import { SchoolYearCreateSchema, SchoolYearUpdateSchema } from '../schemas'

export type ISchoolYearRequest = z.infer<typeof SchoolYearCreateSchema>

export type ISchoolYearUpdateRequest = z.infer<typeof SchoolYearUpdateSchema>
