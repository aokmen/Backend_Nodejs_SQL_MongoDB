/*      BLOGAPI PROPJECT index file     */

'use strict'
const express=require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT || 8000

//? DB conneciton 
require('./src/dbConnection')

app.use(express.json())

app.use('/',require('./src/routes/blogRoutes'))
app.use('/user',require('./src/routes/userRoutes'))


//?errorHandler
app.use(require('./src/errorHandler'))

app.listen(PORT, ()=> console.log('server is runnin on http://127.0.0.1:'+PORT))