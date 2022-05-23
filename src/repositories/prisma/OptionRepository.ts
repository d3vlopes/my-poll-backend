import { io } from '../../app'
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

    const newVote = {
      id: updateOption.id,
      poll_id: updateOption.poll_id,
      text: updateOption.text,
      points: updateOption.points,
    }

    io.emit('new_vote', newVote)

    return updateOption
  }

  async listByPollId(id_poll: string) {
    const options = await prisma.option.findMany({
      where: {
        poll_id: id_poll,
      },
      include: {
        poll: true,
      },
      orderBy: {
        points: 'desc',
      },
    })

    return options
  }
}
