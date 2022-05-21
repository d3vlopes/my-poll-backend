import { IOptionRepository } from '../../../../repositories/IOptionsRepository'

export class ListOptionByPollIdUseCase {
  constructor(private optionsRepository: IOptionRepository) {}

  async execute(id_poll: string) {
    const option = await this.optionsRepository.listByPollId(id_poll)

    return option
  }
}
