'use strict'
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

module.exports = {
    login:async(req,res)=>{
        const {username,password} = req.body
        if(username && password){
            const user = await User.findOne({username,password})
            if(user.isActive){
                const accessData = {
                    _id:user._id,
                    userId:user.userId,
                    username:user.username,
                    isActive:user.isActive,
                    isAdmin:user.isAdmin,
                    isLead:user.isLead,
                }

                const accessToken = jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '1m'})
                const refreshData = {
                    username:user.username,
                    password:user.password
                }
                const refreshToken = jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '2m'})
            res.status(200).send({
                result: 'Token is successful',
                token:{
                    accessToken:accessToken,
                    refreshToken:refreshToken
                }
            })
            
            }else{
                res.errorStatusCode=401
                throw new Error('Token not successful')
            }

        }
        
    },refresh:async(req,res)=>{

        const refreshToken = req.body?.token.refreshToken
        const jwtData = jwt.verify(refreshToken,process.env.REFRESH_KEY)
        const {username,password} = jwtData
        console.log(username);
        console.log(password);

        if(username && password){

            const user = await Personal.findOne({username, password})
        //    console.log(user)
            if(user.isActive){
                
                const accessData = {
                    _id:user._id,
                    departmentId:user.departmentId,
                    usermame:user.username,
                    firstName:user.firstName,
                    lastName:user.firstName,
                    isActive:user.isActive,
                    isAdmin:user.isAdmin,
                    isLead:user.isLead,
                  
                }


                // const accessToken = jwt.sign(data,key,time)
                const accessToken = jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '1m'})

                const refreshData = {
                    usermame:user.username,
                    password:user.password
                }


                const refreshToken = jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '2m'})

           res.status(200).send({
            error: false,
            token:{
                accessToken:accessToken,
                refreshToken:refreshToken
            }
        })


            }else{
                res.errorStatusCode=401
                throw new Error(' user not active')
            }



        }else{
            res.errorStatusCode=401
            throw new Error(' username or password missing')
        }
    },
    logout: async (req,res)=>{
        res.send({
            error:false,
            message:"you dont need logout"
        })
    }
}