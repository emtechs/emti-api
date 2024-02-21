import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleCountyService = async (id: string) => {
  try {
    await prisma.moduleCounty.delete({
      where: { id },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
