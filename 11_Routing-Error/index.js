'use strict'

const express=require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT || 8000

//? ------------------------------ classic route ----------------------------- */

// app.get('/',(req,res)=>{res.send({ message:'Home page' })})
// app.get('/about',(req,res)=>{res.send({ message:'About page' })})

//? --------------------------------- Routing -------------------------------- */

// const router = express.Router() // special app
// router.get('/',(req,res)=>{res.send({ message:'Home page' })})
// router.get('/about',(req,res)=>{res.send({ message:'About page' })})
// router.get('/user/:userID',(req,res)=>{res.send({ message:'User page' })})

app.use('/user',require('./routes/routesuser'))

app.listen(PORT,() => console.log('server running http://127.0.0.1:'+PORT))