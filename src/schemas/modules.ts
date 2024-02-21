import { z } from 'zod'

export const ModuleCreateSchema = z.object({
  name: z.string(),
})

export const ModuleUpdateSchema = ModuleCreateSchema.partial()
