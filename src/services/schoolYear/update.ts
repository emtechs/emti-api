import { AppError } from '../../errors'
import { ISchoolYearUpdateRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const updateSchoolYearService = async (
  id: string,
  { year }: ISchoolYearUpdateRequest,
) => {
  try {
    const schoolYear = await prisma.schoolYear.update({
      where: { id },
      data: { year },
    })

    return schoolYear
  } catch {
    throw new AppError('school year not found', 404)
  }
}
