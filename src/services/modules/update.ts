import { IModuleUpdateRequest } from '../../interfaces'
import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const updateModuleService = async (
  id: string,
  { name }: IModuleUpdateRequest,
) => {
  try {
    return await prisma.module.update({
      where: { id },
      data: {
        name,
      },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
