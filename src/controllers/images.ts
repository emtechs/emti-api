import { Request, Response } from 'express'
import { createImageService } from '../services'

export const createImageController = async (req: Request, res: Response) => {
  await createImageService(req.user.id, req.file)
  return res.status(201).json({})
}
