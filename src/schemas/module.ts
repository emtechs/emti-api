import { z } from 'zod'

export const ModuleCreateSchema = z.object({
  name: z.string(),
  url: z.string(),
})
