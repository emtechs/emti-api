import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listModuleCountyService = async ({
  order,
  skip,
  take,
  county_id,
  user_id,
}: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  let orderBy = {}

  switch (order) {
    case 'county':
      orderBy = { county: { name: 'asc' } }
      break

    case 'module':
      orderBy = { module: { name: 'asc' } }
      break
  }

  const [moduleCounty, total] = await Promise.all([
    prisma.moduleCounty.findMany({
      take,
      skip,
      where: { county_id, users: { some: { user_id } } },
      include: { county: true, module: true },
      orderBy,
    }),
    prisma.moduleCounty.count(),
  ])

  return {
    total,
    result: moduleCounty,
  }
}
