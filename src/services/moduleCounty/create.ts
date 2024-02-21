import { IModuleCountyRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const createModuleCountyService = async ({
  county_id,
  module_id,
  url,
}: IModuleCountyRequest) => {
  return await prisma.moduleCounty.create({
    data: { url, county_id, module_id },
  })
}
