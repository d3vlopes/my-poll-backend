import { IPollsRepository } from '../../../../repositories/IPollsRepository'

export class ListPollsByStatusUseCase {
  constructor(private pollRepository: IPollsRepository) {}

  async execute(status: string) {
    const polls = await this.pollRepository.findAllByStatus(status)

    return polls
  }
}
