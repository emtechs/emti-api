import { AppError } from '../../errors'
import { prisma } from '../../lib'

export const retrieveClassService = async (id: string) => {
  const classData = await prisma.class.findUnique({
    where: { id },
  })

  if (!classData) throw new AppError('class not found', 404)

  return classData
}
