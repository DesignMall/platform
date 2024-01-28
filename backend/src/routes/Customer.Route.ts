import express from 'express'

import { PostRequestController } from '../controllers/Customer.controller'

const CustomerRoute = express()

CustomerRoute.post('/postRequest', PostRequestController)

export default CustomerRoute