import express, { Express } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import MainRoute from '../routes/Route'

dotenv.config()

const ApplyGlobalMiddlewares = (app: Express) => {
    app.use(MainRoute)
    app.use(helmet())
    app.use(cookieParser())
    app.use(express.json())
    app.use(cors({
        origin: process.env.CLIENT_URL_DEV,
        credentials: true
    }))
}

export default ApplyGlobalMiddlewares
