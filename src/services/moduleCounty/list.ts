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

  let where = {}
  let orderBy = {}

  switch (order) {
    case 'county':
      orderBy = { county: { name: 'asc' } }
      break

    case 'module':
      orderBy = { module: { name: 'asc' } }
      break
  }

  if (county_id) where = { ...where, county_id }

  if (user_id) where = { ...where, users: { some: { user_id } } }

  const [moduleCounty, total] = await Promise.all([
    prisma.moduleCounty.findMany({
      take,
      skip,
      where,
      include: { county: true },
      orderBy,
    }),
    prisma.moduleCounty.count({ where }),
  ])

  return {
    total,
    result: moduleCounty,
  }
}
