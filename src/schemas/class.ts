import { z } from 'zod'

export const ClassCreateSchema = z.object({
  name: z.string(),
})

export const ClassUpdateSchema = ClassCreateSchema.partial()
