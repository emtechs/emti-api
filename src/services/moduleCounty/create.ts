import { IModuleCountyRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const createModuleCountyService = async ({
  county_id,
  module_id,
}: IModuleCountyRequest) => {
  return await prisma.moduleCounty.create({
    data: { county_id, module_id },
  })
}
