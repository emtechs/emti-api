import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const retrieveModuleCountyService = async (key: string) => {
  const moduleCounty = await prisma.moduleCounty.findUnique({
    where: { key },
    include: { image: { select: { url: true } } },
  })

  if (!moduleCounty) throw new AppError('county not found', 404)

  return moduleCounty
}
