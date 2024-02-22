import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleService = async (name: string) => {
  try {
    await prisma.module.delete({
      where: { name },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
