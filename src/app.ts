import 'express-async-errors'
import express from 'express'
import { errorHandler } from './errors'
import {
  classRouter,
  countyRouter,
  moduleCountyRouter,
  moduleRouter,
  moduleUserRouter,
  schoolYearRouter,
} from './router'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  next()
})

app.use('/classes', classRouter)
app.use('/counties', countyRouter)
app.use('/modules', moduleRouter)
app.use('/modulecounty', moduleCountyRouter)
app.use('/moduleuser', moduleUserRouter)
app.use('/schoolyear', schoolYearRouter)

app.use(errorHandler)

export default app
