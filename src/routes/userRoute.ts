import { Router } from "express"

const userRoute = Router()

userRoute.get('/status', (req, res)  => {
    res.status(200).send({name: 'yellow'})
})

export = userRoute