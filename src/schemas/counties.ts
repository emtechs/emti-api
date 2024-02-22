import { z } from 'zod'

export const CountyCreateSchema = z.object({
  name: z.string(),
  url: z.string(),
})

export const CountyUpdateSchema = CountyCreateSchema.partial()
