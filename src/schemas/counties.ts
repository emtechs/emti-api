import { z } from 'zod'

export const CountyCreateSchema = z.object({
  name: z.string(),
})

export const CountyUpdateSchema = CountyCreateSchema.partial()
