import { z } from 'zod'
import { ModuleCountyCreateSchema, ModuleCountyUpdateSchema } from '../schemas'

export type IModuleCountyRequest = z.infer<typeof ModuleCountyCreateSchema>

export type IModuleCountyUpdateRequest = z.infer<
  typeof ModuleCountyUpdateSchema
>
