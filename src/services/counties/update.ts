import { prisma } from '../../lib'
import { AppError } from '../../errors'
import { ICountyUpdateRequest } from '../../interfaces'

export const updateCountyService = async (
  id: string,
  { name }: ICountyUpdateRequest,
) => {
  try {
    return await prisma.county.update({
      where: { id },
      data: {
        name,
      },
    })
  } catch {
    throw new AppError('county not found', 404)
  }
}
