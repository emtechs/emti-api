import { Request, Response } from 'express'
import {
  createModuleUserService,
  deleteModuleUserService,
  listModuleUserService,
} from '../services'

export const createModuleUserController = async (
  req: Request,
  res: Response,
) => {
  const moduleData = await createModuleUserService(req.body)
  return res.status(201).json(moduleData)
}

export const deleteModuleUserController = async (
  req: Request,
  res: Response,
) => {
  await deleteModuleUserService(req.params.id)
  return res.status(204).json({})
}

export const listModuleUserController = async (req: Request, res: Response) => {
  const modules = await listModuleUserService(req.query)
  return res.json(modules)
}
