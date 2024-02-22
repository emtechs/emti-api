import { prisma } from '../../lib'
import { IImageRequest } from '../../interfaces'
import { deleteImageService } from '../../services'

export const createImageService = async (data: IImageRequest) => {
  const { county_id, module_id } = data

  const image = await prisma.image.findUnique({
    where: { county_id, module_id },
  })

  if (image) await deleteImageService(image.id)

  return await prisma.image.create({
    data,
  })
}
