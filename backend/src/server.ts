import express from 'express'
import dotenv from "dotenv"
import ApplyGlobalMiddleWare from '../utils/GlobalMiddleWare'

dotenv.config()

const app = express()

ApplyGlobalMiddleWare(app)

app.listen((process.env.PORT, () => {
    console.log(`Listening in Port ${process.env.PORT}`)
}))