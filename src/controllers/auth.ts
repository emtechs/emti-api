import { Request, Response } from 'express'
import { authApi } from '../lib'

export const createSessionController = async (req: Request, res: Response) => {
  const { data } = await authApi.post('login', req.body)

  return res.status(201).json(data)
}

export const recoveryPasswordController = async (
  req: Request,
  res: Response,
) => {
  await authApi.post('password', {
    ...req.body,
    base_url: 'https://www.emtidigital.com.br',
  })

  return res.status(201).json({})
}

export const refreshSessionController = async (req: Request, res: Response) => {
  const { data } = await authApi.post(`token/${req.params.token}`)

  return res.status(201).json(data)
}

export const updatePasswordController = async (req: Request, res: Response) => {
  await authApi.patch('password', req.body)

  return res.status(200).json({})
}

export const verifyPasswordController = async (req: Request, res: Response) => {
  await authApi.post('password/verify', req.body)

  return res.json({})
}
