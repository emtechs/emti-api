import { z } from 'zod'
import { ModuleCreateSchema } from '../schemas'

export type IModuleRequest = z.infer<typeof ModuleCreateSchema>
