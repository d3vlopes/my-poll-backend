import { prisma } from '../../database/prismaClient'
import { ICreateOption } from '../../useCases/option/useCases/create/CreateOptionUseCase'

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

  async update(id_option: string) {
    const currentOption = await prisma.option.findFirst({
      where: {
        id: id_option,
      },
    })

    const updateOption = await prisma.option.update({
      where: {
        id: id_option,
      },
      data: {
        points: currentOption!.points + 1,
      },
    })

    return updateOption
  }
}
