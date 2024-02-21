import { Request, Response } from 'express'
import {
  createModuleCountyService,
  deleteModuleCountyService,
  listModuleCountyService,
  updateModuleCountyService,
} from '../services'

export const createModuleCountyController = async (
  req: Request,
  res: Response,
) => {
  const moduleData = await createModuleCountyService(req.body)
  return res.status(201).json(moduleData)
}

export const listModuleCountyController = async (
  req: Request,
  res: Response,
) => {
  const moduleData = await listModuleCountyService(req.query)
  return res.json(moduleData)
}

export const updateModuleCountyController = async (
  req: Request,
  res: Response,
) => {
  const moduleData = await updateModuleCountyService(req.params.id, req.body)
  return res.json(moduleData)
}

export const deleteModuleCountyController = async (
  req: Request,
  res: Response,
) => {
  await deleteModuleCountyService(req.params.id)
  return res.status(204).json({})
}
