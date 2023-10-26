'use strict'

// const express=require('express')
// const router = express.Router() // special app

const router = require('express').Router()

router.get('/',(req,res)=>{res.send({ message:'Home page' })})
router.get('/about',(req,res)=>{res.send({ message:'About page' })})
// router.get('/user/:userID',(req,res)=>{res.send({ message:'User page' })})

module.exports = router
