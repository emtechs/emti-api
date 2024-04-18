import { Request, Response } from 'express'
import {
  createClassService,
  deleteClassService,
  listClassService,
  retrieveClassService,
  updateClassService,
} from '../services'

export const createClassController = async (req: Request, res: Response) => {
  const classData = await createClassService(req.body)
  return res.status(201).json(classData)
}

export const deleteClassController = async (req: Request, res: Response) => {
  await deleteClassService(req.params.id)
  return res.status(204).json({})
}

export const listClassController = async (req: Request, res: Response) => {
  const classes = await listClassService(req.query)
  return res.json(classes)
}

export const retrieveClassController = async (req: Request, res: Response) => {
  const classData = await retrieveClassService(req.params.id)
  return res.json(classData)
}

export const updateClassController = async (req: Request, res: Response) => {
  const classData = await updateClassService(req.params.id, req.body)
  return res.json(classData)
}
