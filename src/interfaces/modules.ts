import { z } from 'zod'
import { ModuleCreateSchema, ModuleUpdateSchema } from '../schemas'

export type IModuleRequest = z.infer<typeof ModuleCreateSchema>

export type IModuleUpdateRequest = z.infer<typeof ModuleUpdateSchema>
