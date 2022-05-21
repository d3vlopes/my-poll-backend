import { prisma } from '../../database/prismaClient'

import { IPollsRepository, PollCreateData } from '../IPollsRepository'

export class PollRepository implements IPollsRepository {
  async create({ question, status, start_date, end_date }: PollCreateData) {
    const poll = await prisma.poll.create({
      data: {
        question,
        status,
        start_date,
        end_date,
      },
    })

    return poll
  }
}
