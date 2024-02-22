import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleUserService = async (key: string) => {
  try {
    await prisma.moduleUser.delete({
      where: { key },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
