import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './config/mongoDB.config.js'
import UserRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
connectDB()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());

app.use('/user', UserRouter)


app.listen(process.env.PORT, (err) => {
  if (!err) console.log(`Server is running on port ${process.env.PORT}`)
  else console.log('Error while running server')
})