import { z } from 'zod'

export const ModuleCountyCreateSchema = z.object({
  module_id: z.string().uuid(),
  url: z.string().uuid(),
  county_id: z.string().uuid(),
})

export const ModuleCountyUpdateSchema = ModuleCountyCreateSchema.partial()
