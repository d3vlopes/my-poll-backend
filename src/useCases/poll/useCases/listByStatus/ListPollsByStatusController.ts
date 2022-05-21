import { Request, Response } from 'express'

import { PollRepository } from '../../../../repositories/prisma/PollsRepository'

import { ListPollsByStatusUseCase } from './ListPollsByStatusUseCase'

export class ListPollsByStatusController {
  async handle(req: Request, res: Response) {
    const { status } = req.body

    const pollsRepository = new PollRepository()
    const listPollsByStatusUseCase = new ListPollsByStatusUseCase(
      pollsRepository,
    )

    const polls = await listPollsByStatusUseCase.execute(status)

    return res.status(200).json(polls)
  }
}
