import { IDateAdapter } from '../../../../adapters/IDateAdapter'
import { IOptionRepository } from '../../../../repositories/IOptionsRepository'
import { IPollsRepository } from '../../../../repositories/IPollsRepository'

export interface ICreatePoll {
  id?: string
  question: string
  options?: string[]
  start_date: Date
  end_date: Date
}

export class CreatePollUseCase {
  constructor(
    private pollRepository: IPollsRepository,
    private optionRepository: IOptionRepository,
    private dateAdapter: IDateAdapter,
  ) {}

  async execute({ question, options, start_date, end_date }: ICreatePoll) {
    let status

    if (!start_date || !end_date) {
      throw new Error('Start and end date is required.')
    }

    if (!question) {
      throw new Error('Question is required.')
    }

    if (options!.length < 3) {
      throw new Error('should have at least 3 options')
    }

    const dateNow = this.dateAdapter.dateNow()
    const isAfterStartDate = this.dateAdapter.compareIfAfter(
      dateNow,
      start_date,
    )
    const isAfterEndDate = this.dateAdapter.compareIfAfter(dateNow, end_date)

    if (isAfterStartDate) {
      status = 'in progress'
    } else {
      status = 'not start'
    }

    if (isAfterEndDate) {
      status = 'complete'
    }

    const poll = await this.pollRepository.create({
      question,
      status,
      start_date,
      end_date,
    })

    options!!.map(async (option) => {
      await this.optionRepository.create({
        poll_id: poll.id!!,
        text: option,
        points: 0,
      })
    })

    return poll
  }
}
