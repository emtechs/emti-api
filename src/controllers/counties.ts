import { Request, Response } from 'express'
import {
  createCountyService,
  deleteCountyService,
  listCountyService,
  retrieveCountyService,
  updateCountyService,
} from '../services'

export const createCountyController = async (req: Request, res: Response) => {
  const county = await createCountyService(req.body)
  return res.status(201).json(county)
}

export const listCountyController = async (req: Request, res: Response) => {
  const counties = await listCountyService(req.query)
  return res.json(counties)
}

export const retrieveCountyController = async (req: Request, res: Response) => {
  const county = await retrieveCountyService(req.params.id)
  return res.json(county)
}

export const updateCountyController = async (req: Request, res: Response) => {
  const county = await updateCountyService(req.params.id, req.body)
  return res.json(county)
}

export const deleteCountyController = async (req: Request, res: Response) => {
  await deleteCountyService(req.params.id)
  return res.status(204).json({})
}
