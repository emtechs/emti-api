import { z } from 'zod'
import { ModuleUserCreateSchema } from '../schemas'

export type IModuleUserRequest = z.infer<typeof ModuleUserCreateSchema>
