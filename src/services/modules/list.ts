import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listModuleService = async ({ skip, take }: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  const [modules, total] = await Promise.all([
    prisma.module.findMany({
      take,
      skip,
      orderBy: { name: 'asc' },
    }),
    prisma.module.count({}),
  ])

  return {
    total,
    result: modules,
  }
}
