import { Request, Response } from 'express'
import {
  createModuleService,
  deleteModuleService,
  listModuleService,
  retrieveModuleService,
} from '../services'

export const createModuleController = async (req: Request, res: Response) => {
  const moduleData = await createModuleService(req.body)
  return res.status(201).json(moduleData)
}

export const listModuleController = async (req: Request, res: Response) => {
  const moduleData = await listModuleService(req.query)
  return res.json(moduleData)
}

export const retrieveModuleController = async (req: Request, res: Response) => {
  const moduleData = await retrieveModuleService(req.params.id)
  return res.json(moduleData)
}

export const deleteModuleController = async (req: Request, res: Response) => {
  await deleteModuleService(req.params.id)
  return res.status(204).json({})
}
