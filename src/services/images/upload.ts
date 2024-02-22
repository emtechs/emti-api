import { env } from '../../env'
import { AppError } from '../../errors'
import { authApi } from '../../lib'
import { createImageService } from '../../services'

interface IDataRequest {
  county_id?: string
  module_id?: string
  user_id?: string
}

export const uploadImageService = async (
  data_req: IDataRequest,
  file?: Express.Multer.File,
) => {
  const { user_id } = data_req
  if (!file) throw new AppError('image not found')

  const { originalname: name, path, size, filename: key } = file

  const data = {
    name,
    size,
    url: path,
    key,
    ...data_req,
  }

  if (env.NODE_ENV === 'production') {
    if (user_id) return await authApi.post('images', data)

    return await createImageService(data)
  }

  const url = `http://localhost:${env.PORT}/files/${key}`
  data.url = url

  if (user_id) return await authApi.post('images', data)

  return await createImageService(data)
}
