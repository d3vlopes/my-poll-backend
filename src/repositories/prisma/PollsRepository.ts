import { prisma } from '../../database/prismaClient'
import { ICreatePoll } from '../../useCases/poll/useCases/create/CreatePollUseCase'

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

  async findAll() {
    const polls = await prisma.poll.findMany({
      where: {},
      select: {
        question: true,
        start_date: true,
        end_date: true,
      },
    })

    return polls
  }

  async findAllByStatus(status: string) {
    const polls = await prisma.poll.findMany({
      where: {
        status,
      },
    })

    return polls
  }
}
