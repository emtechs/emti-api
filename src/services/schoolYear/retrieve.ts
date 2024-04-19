import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const retrieveSchoolYearService = async (id: string) => {
  const schoolYear = await prisma.schoolYear.findUnique({
    where: { id },
  })

  if (!schoolYear) throw new AppError('school year not found', 404)

  return schoolYear
}
