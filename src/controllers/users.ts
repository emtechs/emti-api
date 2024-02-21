import { Request, Response } from 'express'
import { authApi } from '../lib'

export const profileUserController = async (req: Request, res: Response) => {
  const { data } = await authApi.get('users/profile')
  return res.json(data)
}

export const updateUserController = async (req: Request, res: Response) => {
  const { data } = await authApi.patch('users/' + req.params.id, req.body)
  return res.json(data)
}
