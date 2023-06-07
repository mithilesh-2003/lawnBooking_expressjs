const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const hpp = require('hpp')

const { globalErrorHandler } = require("./error")
const userRouter = require("./user/router")
const employeeRouter = require("./employee/router")
const categoryRouter = require("./category/router")
const assetRouter = require("./asset/router")


const bookingRouter = require("./booking/router")

app.use(cors());
app.use(helmet());
app.use(hpp());

// support parsing of application/json type post data
app.use(express.json());

// get method on apple route with dynmic URL id with json reply
app.use('/users', userRouter)
app.use('/emploies', employeeRouter)
app.use('/categories', categoryRouter)
app.use('/assets', assetRouter)
app.use('/bookings', bookingRouter)

// catch all routes
app.all('*', (req, res) => {
  res.status(404).json({ message: 'route not found' })
})

app.use(globalErrorHandler)

module.exports = { app }