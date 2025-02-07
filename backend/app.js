import dotenv from 'dotenv'
dotenv.config()

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT, (err) => {
  if (!err) console.log(`Server is running on port ${process.env.PORT}`)
  else console.log('Error while running server')
})