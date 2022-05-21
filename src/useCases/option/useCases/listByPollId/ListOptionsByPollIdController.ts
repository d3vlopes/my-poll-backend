import { Request, Response } from 'express'

import { OptionRepository } from '../../../../repositories/prisma/OptionRepository'
import { ListOptionByPollIdUseCase } from './ListOptionsByPollIdUseCase'

export class ListOptionByPollIdController {
  async handle(req: Request, res: Response) {
    const { id: id_poll } = req.params

    const optionRepository = new OptionRepository()
    const listOptionByPollIdUseCase = new ListOptionByPollIdUseCase(
      optionRepository,
    )

    const options = await listOptionByPollIdUseCase.execute(id_poll)

    return res.status(200).json(options)
  }
}
