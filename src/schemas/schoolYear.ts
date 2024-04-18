import { z } from 'zod'

export const SchoolYearCreateSchema = z.object({
  year: z.string(),
})

export const SchoolYearUpdateSchema = SchoolYearCreateSchema.partial()
