import { prisma } from '../../database/prismaClient'

import { IOptionRepository, OptionCreateData } from '../IOptionsRepository'

export class OptionRepository implements IOptionRepository {
  async create({ poll_id, text, points }: OptionCreateData) {
    const option = await prisma.option.create({
      data: {
        poll_id,
        text,
        points,
      },
    })

    return option
  }
}
