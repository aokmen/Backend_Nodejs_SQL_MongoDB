
'use strict'

const jwt=require('jsonwebtoken')


 module.exports= (req,res,next) =>{

        const auth=req.headers?.authorization || null    
    
        const accsessToken=auth?.split(' ')[1] 
        req.isLogin=false
    
        // console.log(accsessToken);
        jwt.verify(accsessToken,process.env.ACCESS_KEY,function(err,user){
            if(err){
                console.log('jwt accesskey NO ')
    
            }else{
                req.isLogin=true
                req.user=user
                console.log('jwt accesskey YES ')
            }
        })
        next()
    }
 
