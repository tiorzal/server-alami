const cors = require('cors')
const express = require('express')
const app = express()
const MainRouter = require('./routes')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/', MainRouter)


module.exports = app;