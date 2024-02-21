import { z } from 'zod'

export const ModuleUserCreateSchema = z.object({
  modules: z.object({ id: z.string().uuid() }).array(),
  user_id: z.string().uuid(),
})
