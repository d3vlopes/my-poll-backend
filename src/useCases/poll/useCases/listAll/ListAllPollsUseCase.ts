import { IPollsRepository } from '../../../../repositories/IPollsRepository'

export class ListAllPollsUseCase {
  constructor(private pollRepository: IPollsRepository) {}

  async execute() {
    const polls = await this.pollRepository.findAll()

    return polls
  }
}
