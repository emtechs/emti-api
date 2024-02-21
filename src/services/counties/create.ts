import { ICountyRequest } from '../../interfaces'
import { prisma } from '../../lib'

export const createCountyService = async ({ name }: ICountyRequest) => {
  return await prisma.county.create({
    data: {
      name,
    },
  })
}
