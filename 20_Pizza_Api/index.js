'use strict'

const express = require('express')
const app = express()

// .env Variables
require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

// DB Connection
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/* -------------------------------------------------------------------------- */
/*                                Middleswares                                */
/* -------------------------------------------------------------------------- */
// Json
app.use(express.json())
// findSearchSortPage
app.use(require('./src/middlewares/findSearchSortPage'))

// authentication
app.use(require('./src/middlewares/authentication'))

app.all('/',(req,res)=>{
    res.send({
        error:false,
        message:'Welcome Pizza Api'
    })
})

//Routes
 app.use('/auth',require('./src/routes/authRoute'))
 app.use('/user',require('./src/routes/userRoute'))
 app.use('/topping',require('./src/routes/toppingRoute'))
 app.use('/pizza',require('./src/routes/pizzaRoute'))
 app.use('/order',require('./src/routes/orderRoute'))

//Error Handler
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT,console.log(`Server is running on http://${HOST}:${PORT}`))