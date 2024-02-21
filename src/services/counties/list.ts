import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listCountyService = async ({ take, skip }: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  const [counties, total] = await Promise.all([
    prisma.county.findMany({
      take,
      skip,
      orderBy: { name: 'asc' },
    }),
    prisma.county.count(),
  ])

  return {
    total,
    result: counties,
  }
}
