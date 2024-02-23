import { z } from 'zod'

export const ImageCreateSchema = z.object({
  name: z.string(),
  size: z.number(),
  url: z.string(),
  key: z.string(),
  county_id: z.string().uuid(),
})
