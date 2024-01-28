import express from 'express'
import CustomerRoute from './Customer.Route'
const Router = express()

Router.use('/Customer', CustomerRoute)

export default Router