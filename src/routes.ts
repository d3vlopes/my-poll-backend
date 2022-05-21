import { Router } from 'express'
import { CreatePollController } from './useCases/poll/useCases/create/CreatePollController'

export const routes = Router()

const createPollController = new CreatePollController()

routes.post('/poll', createPollController.handle)
