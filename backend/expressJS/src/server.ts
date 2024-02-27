import express from 'express'
import dotenv from 'dotenv'
import ApplyGlobalMiddlewares from './utils/GlobalMiddlewares'
import log from './utils/logger'

dotenv.config()

const app = express()

ApplyGlobalMiddlewares(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    log.info(`Server is Running at Port ${PORT}`)
})

