import { z } from 'zod'

export const UserUpdateSchema = z
  .object({
    name: z.string(),
    password: z.string().optional(),
    email: z.string().email(),
    old_password: z.string(),
    is_active: z.boolean().optional(),
    is_first_access: z.boolean().optional(),
  })
  .partial()
