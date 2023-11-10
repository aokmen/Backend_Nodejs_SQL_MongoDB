'use strict'

const express = require('express')
const app = express()
require('dotenv').config()

//errorHandler Modules
require('express-async-errors')

//Middleware
app.use(express.json())  // app.use('/',express.json())

// session and cookies
// const session=require('cookie-session')
// app.use(session({secret: process.env.SECRETKEY || 'write key  for session'}))




//env Variables
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

//DB Connection
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()
const jwt=require('jsonwebtoken')
//authentication
app.use(require('./src/middlewares/authentication'))

//Routes
app.all('/',(req,res)=>{
    res.send({
        error:false,
        message: 'PERSONAL API PROJECT',
        isLogin:req.isLogin,
        session:req.session
    })
})

app.use('/auth',require('./src/routes/authRoutes'))
app.use('/department',require('./src/routes/departmentRoutes'))
app.use('/personal',require('./src/routes/personalRoutes'))

app.use(require('./src/middlewares/searchSortPage'))

// errorHandler Middleware
app.use(require('./src/middlewares/errorHandler'))

// sync data
// require('./src/helpers/sync')() // >> ilk calistiktan sonra yoruma almazsan her index yenilendiginde bastan olusturur.

app.listen(PORT,console.log(`Server is running on http://${HOST}:${PORT}`))