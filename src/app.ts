import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dontenv from 'dotenv'
import userRoute from './routes/userRoute'
const app:Express = express()
const PORT = process.env.PORT || 4000

dontenv.config()

app.use(helmet())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('service is running')
})

app.listen(PORT, () => {
    console.log(`Service running on port ${PORT}`)
})