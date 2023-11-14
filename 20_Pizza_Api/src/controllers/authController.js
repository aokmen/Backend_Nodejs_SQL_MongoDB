
'use strict'

const User = require('../models/userModel')
const jwt=require('jsonwebtoken')

module.exports ={
    login: async (req,res) =>{
        const { username, password } =req.body 
        if(username && password){
            const user = await User.findOne({username , password})

            if(user.isActive){
                
                const data = {
                    access : user.toJSON(),
                    refresh: {_id:user._id,password:user.password},
                    accessExpiresIn:'10m',
                    refreshExpiresIn:'20m',
                }

                res.send({
                    result: 'user is active',
                    token:{
                        access:jwt.sign(data.access,process.env.ACCESS_KEY,{expiresIn:data.accessExpiresIn}),
                        refresh:jwt.sign(data.refresh,process.env.REFRESH_KEY,{expiresIn:data.refreshExpiresIn})
                    }
                })



            }else{
                res.errStatusCode=401
                throw new Error('Username and Password not active') 
            }

        }else{
            res.errStatusCode=401
            throw new Error('Login failed with username and password')
        }
       
     
    },
    refresh: async (req,res) =>{

        const refreshToken = req.body?.token?.refresh 

        if(refreshToken){
            
            jwt.verify(refreshToken,process.env.REFRESH_KEY, async function(err,userData){
                if(err){
                    res.errStatusCode=401
                    throw err
                }else{
                    const {_id, password} =userData
                    if(_id && password){
                        const user = await User.findOne({_id}) // buraya password yazarsak encrt metodu tekrar sifreler ve refleshtoken onu taniyamaz
                        if(_id && user.password==password){
                            if(user.isActive){
                
                                const data = {
                                    access : user.toJSON(),
                                    refresh: {_id:user._id,password:user.password},
                                    accessExpiresIn:'10m',
                                    refreshExpiresIn:'20m',
                                }
                
                                res.send({
                                    result: 'user is active',
                                    token:{
                                        access:jwt.sign(data.access,process.env.ACCESS_KEY,{expiresIn:data.accessExpiresIn}),
                                        // refresh:jwt.sign(data.refresh,process.env.REFRESH_KEY,{expiresIn:data.refreshExpiresIn})
                                    }
                                })
                
                
                
                            }else{
                                res.errStatusCode=401
                                throw new Error('user not active') 
                            }
                        } else{
                            res.errStatusCode=401
                            throw new Error('wrong key') 
                        }
                    }else{
                        res.errStatusCode=401
                        throw new Error('missing Id and password') 
                    }
                }
            })

      

        }else{
            res.errStatusCode=401
            throw new Error('refresh key failed')
        }
       
     
    }, logout: async (req,res)=>{
        res.send({
            error:false,
            message:"you dont need logout"
        })
    }


}