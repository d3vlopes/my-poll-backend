import { Request, Response } from 'express'

import { OptionRepository } from '../../../../repositories/prisma/OptionRepository'
import { UpdateOptionUseCase } from './UpdateOptionUseCase'

export class UpdateOptionController {
  async handle(req: Request, res: Response) {
    const { id_option } = req.body

    const optionRepository = new OptionRepository()
    const updateOptionUseCase = new UpdateOptionUseCase(optionRepository)

    const option = await updateOptionUseCase.execute(id_option)

    return res.status(200).json(option)
  }
}
