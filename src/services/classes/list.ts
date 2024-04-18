import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listClassService = async ({ take, skip, name }: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  let where = {}

  if (name) where = { ...where, name: { contains: name, mode: 'insensitive' } }

  const [classesData, total] = await Promise.all([
    prisma.class.findMany({
      take,
      skip,
      where,
      orderBy: { name: 'asc' },
    }),
    prisma.class.count({ where }),
  ])

  return {
    total,
    result: classesData,
  }
}
