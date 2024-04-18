import { Request, Response } from 'express'
import {
  createSchoolYearService,
  deleteSchoolYearService,
  listSchoolYearService,
  retrieveSchoolYearService,
  updateSchoolYearService,
} from '../services'

export const createSchoolYearController = async (
  req: Request,
  res: Response,
) => {
  const schoolYear = await createSchoolYearService(req.body)
  return res.status(201).json(schoolYear)
}

export const deleteSchoolYearController = async (
  req: Request,
  res: Response,
) => {
  await deleteSchoolYearService(req.params.id)
  return res.status(204).json({})
}

export const listSchoolYearController = async (req: Request, res: Response) => {
  const schoolYear = await listSchoolYearService(req.query)
  return res.json(schoolYear)
}

export const retrieveSchoolYearController = async (
  req: Request,
  res: Response,
) => {
  const schoolYear = await retrieveSchoolYearService(req.params.id)
  return res.json(schoolYear)
}

export const updateSchoolYearController = async (
  req: Request,
  res: Response,
) => {
  const schoolYear = await updateSchoolYearService(req.params.id, req.body)
  return res.json(schoolYear)
}
