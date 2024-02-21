import { IModuleUserRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const createModuleUserService = async ({
  modules,
  user_id,
}: IModuleUserRequest) => {
  const data = modules.map((el) => {
    return { module_id: el.id, user_id }
  })

  return await prisma.moduleUser.createMany({
    data,
  })
}
