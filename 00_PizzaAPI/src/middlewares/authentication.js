'use strict'

const jwt = require('jsonwebtoken')

module.exports = (req,res,next) =>{
    const auth = req.headers?.authorization || null

    const accessToken = auth?.split(' ')[1]
    req.isLogin=false
    jwt.verify(accessToken,process.env.ACCESS_KEY,function(err,user){
        if(err){
            console.log('JWT access key failed');
        }else{
            res.isLogin = true
            req.user = user
            console.log('JWT access key successful');
        }
    })
    next()
}