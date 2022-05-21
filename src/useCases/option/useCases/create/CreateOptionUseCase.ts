import { IOptionRepository } from '../../../../repositories/IOptionsRepository'

export interface ICreateOption {
  poll_id: string
  text: string
  points: number
}

export class CreateOptionUseCase {
  constructor(private optionsRepository: IOptionRepository) {}

  async execute({ poll_id, text, points }: ICreateOption) {
    const option = await this.optionsRepository.create({
      poll_id,
      text,
      points,
    })

    return option
  }
}
