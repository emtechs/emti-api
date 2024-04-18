import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const deleteClassService = async (id: string) => {
  try {
    await prisma.class.delete({
      where: { id },
    })
  } catch {
    throw new AppError('class not found', 404)
  }
}
