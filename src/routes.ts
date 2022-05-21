import { Router } from 'express'

import { ListOptionByPollIdController } from './useCases/option/useCases/listByPollId/ListOptionsByPollIdController'
import { UpdateOptionController } from './useCases/option/useCases/update/UpdateOptionController'
import { CreatePollController } from './useCases/poll/useCases/create/CreatePollController'
import { ListAllPollsController } from './useCases/poll/useCases/listAll/ListAllPollsController'
import { ListPollsByStatusController } from './useCases/poll/useCases/listByStatus/ListPollsByStatusController'

export const routes = Router()

const createPollController = new CreatePollController()
const listAllPollsController = new ListAllPollsController()
const listPollsByStatusController = new ListPollsByStatusController()

const updateOptionController = new UpdateOptionController()
const listOptionByPollIdController = new ListOptionByPollIdController()

routes.post('/poll', createPollController.handle)

routes.get('/polls', listAllPollsController.handle)
routes.get('/polls/status', listPollsByStatusController.handle)

routes.get('/option/:id', listOptionByPollIdController.handle)
routes.put('/vote', updateOptionController.handle)
