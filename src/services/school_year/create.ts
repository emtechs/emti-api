import { prisma } from '../../lib'
import { ISchoolYearRequest } from '../../interfaces'

export const createSchoolYearService = async ({ year }: ISchoolYearRequest) => {
  const schoolYear = await prisma.schoolYear.create({
    data: { year },
  })

  return schoolYear
}
