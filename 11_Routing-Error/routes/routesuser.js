const router = require('express').Router()

router.get('/',(req,res)=>{res.send({ message:'All User' })})
router.get('/login',(req,res)=>{res.send({ message:'Login Page' })})
router.get('/logout',(req,res)=>{res.send({ message:'logout Page' })})
router.get('/:userId',(req,res)=>{res.send({ message:'UserId Page' })})
router.get('/user/:userID/password',(req,res)=>{res.send({ message:'Password Page' })})

module.exports = router