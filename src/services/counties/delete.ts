import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteCountyService = async (id: string) => {
  try {
    await prisma.county.delete({
      where: { id },
    })
  } catch {
    throw new AppError('county not found', 404)
  }
}
