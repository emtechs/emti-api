import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleUserService = async (id: string) => {
  try {
    await prisma.moduleUser.delete({
      where: { id },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
