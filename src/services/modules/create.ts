import { IModuleRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const createModuleService = async ({ name }: IModuleRequest) => {
  return await prisma.module.create({
    data: {
      name,
    },
  })
}
