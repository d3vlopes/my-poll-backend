import { Request, Response } from 'express'
import { DateAdapter } from '../../../../adapters/dayjs/DateAdapter'

import { OptionRepository } from '../../../../repositories/prisma/OptionRepository'
import { PollRepository } from '../../../../repositories/prisma/PollsRepository'
import { CreatePollUseCase } from './CreatePollUseCase'

export class CreatePollController {
  async handle(req: Request, res: Response) {
    const { question, options, start_date, end_date } = req.body

    const optionsRepository = new OptionRepository()
    const dateAdapter = new DateAdapter()
    const pollsRepository = new PollRepository()
    const createPollUseCase = new CreatePollUseCase(
      pollsRepository,
      optionsRepository,
      dateAdapter,
    )

    const poll = await createPollUseCase.execute({
      question,
      options,
      start_date,
      end_date,
    })

    return res.status(201).json(poll)
  }
}
