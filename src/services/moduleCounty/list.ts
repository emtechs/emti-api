import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listModuleCountyService = async ({
  order,
  skip,
  take,
  county_id,
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
      where: { county_id },
      include: { county: true },
      orderBy,
    }),
    prisma.moduleCounty.count({ where: { county_id } }),
  ])

  return {
    total,
    result: moduleCounty,
  }
}
