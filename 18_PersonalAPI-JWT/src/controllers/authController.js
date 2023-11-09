
'use strict'
const jwt = require('jsonwebtoken')
const Personal = require('../models/personalModel')

module.exports={
    login:async(req,res)=>{
        const {username,password} = req.body
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
                    isLead:user.isLead,
                    isActive:user.isActive
                }


                // const accessToken = jwt.sign(data,key,time)
                const accessToken = jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '10m'})

                const refreshData = {
                    usermame:user.username,
                    password:user.password
                }


                const refreshToken = jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '30m'})

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