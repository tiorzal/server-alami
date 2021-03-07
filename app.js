const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => { res.send("test")})


module.exports = app;