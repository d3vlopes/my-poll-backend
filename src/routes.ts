import { Router } from 'express'
import { UpdateOptionController } from './useCases/option/useCases/update/UpdateOptionController'
import { CreatePollController } from './useCases/poll/useCases/create/CreatePollController'

export const routes = Router()

const createPollController = new CreatePollController()
const updateOptionController = new UpdateOptionController()

routes.post('/poll', createPollController.handle)

routes.put('/vote', updateOptionController.handle)
