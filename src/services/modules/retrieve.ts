import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const retrieveModuleService = async (id: string) => {
  const moduleData = await prisma.module.findUnique({
    where: { id },
  })

  if (!moduleData) throw new AppError('module not found', 404)

  return moduleData
}
