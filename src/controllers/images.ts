import { Request, Response } from 'express'
import { uploadImageService } from '../services'

export const createImageUserController = async (
  req: Request,
  res: Response,
) => {
  await uploadImageService({ user_id: req.user.id }, req.file)
  return res.status(201).json({})
}
