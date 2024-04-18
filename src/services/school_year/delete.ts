import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const deleteSchoolYearService = async (id: string) => {
  try {
    await prisma.schoolYear.delete({
      where: { id },
    })
  } catch {
    throw new AppError('school year not found', 404)
  }
}
