import { ICreatePoll } from '../useCases/poll/useCases/create/CreatePollUseCase'

export interface PollCreateData {
  id?: string
  question: string
  options?: string[]
  status: string
  start_date: Date
  end_date: Date
}

export interface IPollsRepository {
  create: (data: PollCreateData) => Promise<ICreatePoll>
}
