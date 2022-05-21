import { IOptionRepository } from '../../../../repositories/IOptionsRepository'

export class UpdateOptionUseCase {
  constructor(private optionsRepository: IOptionRepository) {}

  async execute(id_option: string) {
    const option = await this.optionsRepository.update(id_option)

    return option
  }
}
