import express, { Request, Response } from 'express'
import './database/connection'

import routes from './routes'

const app = express()
app.use(express.json())

app.use(routes)

app.listen((process.env.PORT || 3333), () => {
  console.log('Server is running at port', (process.env.PORT || 3333))
})

