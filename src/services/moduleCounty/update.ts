import { IModuleCountyUpdateRequest } from '../../interfaces'
import { prisma } from '../../lib'
import { AppError } from '../../errors'

export const updateModuleCountyService = async (
  key: string,
  { county_id, module_id, url }: IModuleCountyUpdateRequest,
) => {
  try {
    return await prisma.moduleCounty.update({
      where: { key },
      data: {
        county_id,
        module_id,
        url,
      },
    })
  } catch {
    throw new AppError('module not found', 404)
  }
}
