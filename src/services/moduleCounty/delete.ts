import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const deleteModuleCountyService = async (key: string) => {
  try {
    await prisma.moduleCounty.delete({
      where: { key },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
