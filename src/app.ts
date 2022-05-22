import express, { NextFunction, Request, Response } from 'express'
import { Server } from 'socket.io'

import cors from 'cors'
import http from 'http'

import 'express-async-errors'

import { routes } from './routes'
import { AppError } from './error/AppError'

const app = express()

app.use(cors())

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`)
})

app.use(express.json())
app.use(routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  })
})

export { serverHttp, io }
