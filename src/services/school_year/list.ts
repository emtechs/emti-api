import { IQuery } from '../../interfaces'
import { prisma } from '../../lib'

export const listSchoolYearService = async ({ take, skip, name }: IQuery) => {
  if (take) take = +take
  if (skip) skip = +skip

  let where = {}

  if (name) where = { ...where, year: { contains: name, mode: 'insensitive' } }

  const [schoolYear, total] = await Promise.all([
    prisma.schoolYear.findMany({
      take,
      skip,
      where,
      orderBy: { year: 'asc' },
    }),
    prisma.schoolYear.count({ where }),
  ])

  return {
    total,
    result: schoolYear,
  }
}
