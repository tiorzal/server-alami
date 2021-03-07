const cors = require('cors')
const express = require('express')
const app = express()
const MainRouter = require('./routes')
const { ErrorHandler } = require('./middlewares')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', MainRouter)

app.use(ErrorHandler)

module.exports = app;