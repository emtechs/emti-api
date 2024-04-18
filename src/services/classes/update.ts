import { AppError } from '../../errors'
import { IClassUpdateRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const updateClassService = async (
  id: string,
  { name }: IClassUpdateRequest,
) => {
  try {
    const classData = await prisma.class.update({
      where: { id },
      data: { name },
    })

    return classData
  } catch {
    throw new AppError('class not found', 404)
  }
}
