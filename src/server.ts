import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import 'express-async-errors'

import { routes } from './routes'
import { AppError } from './error/AppError'

const app = express()

app.use(cors())
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

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running')
})
