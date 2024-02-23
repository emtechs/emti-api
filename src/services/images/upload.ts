import { env } from '../../env'
import { AppError } from '../../errors'
import { authApi } from '../../lib'
import { createImageService } from '../../services'

interface IDataRequest {
  county_id?: string
  user_id?: string
}

export const uploadImageService = async (
  { county_id, user_id }: IDataRequest,
  file?: Express.Multer.File,
) => {
  if (!file) throw new AppError('image not found')

  const { originalname: name, path, size, filename: key } = file

  const data = {
    name,
    size,
    url: path,
    key,
  }

  if (env.NODE_ENV === 'production') {
    if (user_id) return await authApi.post('images', { ...data, user_id })

    if (county_id) return await createImageService({ ...data, county_id })
  }

  const url = `http://localhost:${env.PORT}/files/${key}`
  data.url = url

  if (user_id) return await authApi.post('images', { ...data, user_id })

  if (county_id) return await createImageService({ ...data, county_id })
}
