'use strict'

const express = require('express')
const app = express()

require("dotenv").config()

const HOST=process.env.HOST || '127.0.0.1'
const PORT=process.env.PORT || 8000

const session=require('cookie-session')
app.use(session({secret: process.env.SECRETKEY || 'write key  for session'}))

/* require('./src/configs/dbConnection') */
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

app.use(express.json())



app.get('/',(req,res) => {
    res.send('Hi')
})
app.use('/auth',require('./src/routes/authRoutes'))
app.use('/user',require('./src/routes/userRoute'))


require('express-async-errors')
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, console.log(`Server is running ${HOST}:${PORT}`))