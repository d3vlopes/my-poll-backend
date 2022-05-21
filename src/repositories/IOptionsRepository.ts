import { ICreateOption } from '../useCases/option/useCases/create/CreateOptionUseCase'

export interface OptionCreateData {
  poll_id: string
  text: string
  points: number
}

export interface IOptionRepository {
  create: (data: OptionCreateData) => Promise<ICreateOption>
}
