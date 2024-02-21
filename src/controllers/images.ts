import { Request, Response } from 'express'
import { createImageService } from '../services'

export const createImageController = async (req: Request, res: Response) => {
  await createImageService(req.body)
  return res.status(201).json({})
}
