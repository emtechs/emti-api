import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const retrieveCountyService = async (id: string) => {
  const county = await prisma.county.findUnique({
    where: { id },
    include: { image: { select: { url: true } } },
  })

  if (!county) throw new AppError('county not found', 404)

  return county
}
