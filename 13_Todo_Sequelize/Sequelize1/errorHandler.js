'use strict'
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'

app.use(express.json())  // bu ifade ile json formatinda veri gönderilebiliyor

// app.all('/',(req,res)=>{
//     res.send('welcome')
// })

app.use(require('./todoRouter'))