import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listModuleUserService = async ({
  order,
  skip,
  take,
  user_id,
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

  const [moduleUser, total] = await Promise.all([
    prisma.moduleUser.findMany({
      take,
      skip,
      where: { user_id, module: { county_id } },
      include: { module: true },
      orderBy,
    }),
    prisma.moduleUser.count({ where: { user_id, module: { county_id } } }),
  ])

  return {
    total,
    result: moduleUser,
  }
}
