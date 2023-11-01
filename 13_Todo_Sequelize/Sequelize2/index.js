'use strict'

const express=require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// convert  json to data object
app.use(express.json()) 

// app.all('/',(req,res)=>{
//     res.send('welcome')
// })

app.use(require('./todoRouter'))

// manage error with from errorHandler.js
app.use(require('./errorHandler'))

app.listen(PORT,()=>console.log('http://'+HOST+':'+PORT))