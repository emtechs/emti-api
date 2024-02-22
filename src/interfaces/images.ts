import { z } from 'zod'
import { ImageCreateSchema } from '../schemas'

export type IImageRequest = z.infer<typeof ImageCreateSchema>
