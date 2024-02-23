import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listModuleUserService = async ({
  skip,
  take,
  user_id,
  county_id,
}: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  const [moduleUser, total] = await Promise.all([
    prisma.moduleUser.findMany({
      take,
      skip,
      where: { user_id, module: { county_id } },
      include: { module: { include: { module: true } } },
      orderBy: { module: { module: { name: 'asc' } } },
    }),
    prisma.moduleUser.count({ where: { user_id, module: { county_id } } }),
  ])

  return {
    total,
    result: moduleUser.map((el) => {
      return {
        id: el.key,
        name: el.module.module.name.toUpperCase(),
        url: el.module.module.url,
        is_active: el.module.is_active,
      }
    }),
  }
}
