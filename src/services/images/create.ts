import { authApi } from '../../lib'
import { AppError } from '../../errors'
import { env } from '../../env'

export const createImageService = async (
  user_id: string,
  file?: Express.Multer.File,
) => {
  if (!file) throw new AppError('image not found')

  const { originalname: name, path, size, filename: key } = file

  const data = {
    name,
    size,
    url: path,
    key,
    user_id,
  }

  if (env.NODE_ENV === 'production') return await authApi.post('images', data)

  const url = `http://localhost:${env.PORT}/files/${key}`
  data.url = url

  return await authApi.post('images', data)
}
