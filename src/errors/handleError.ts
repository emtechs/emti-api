/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from 'axios'
import { ZodError } from 'zod'
import { AppError } from './appError'
import { Request, Response, NextFunction } from 'express'

export const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError)
    return res.status(error.statusCode).json({
      message: error.message,
    })

  if (error instanceof ZodError)
    return res.status(400).json({ message: error.flatten().fieldErrors })

  if (error instanceof AxiosError) {
    return res.status(error.response?.status || 500).json({
      message: error.response?.data.message,
    })
  }

  console.log(error)

  return res.status(500).json({
    message: 'Internal server error',
  })
}
