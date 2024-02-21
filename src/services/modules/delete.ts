import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleService = async (id: string) => {
  try {
    await prisma.module.delete({
      where: { id },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
