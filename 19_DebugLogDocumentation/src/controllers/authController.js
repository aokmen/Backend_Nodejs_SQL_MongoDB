//! -----   PersonnelAPI    -----
//? authtController

'use strict'

// npm i jsonwebtoken
const jwt=require('jsonwebtoken')

const Personnel=require('../models/personnelModel')

module.exports={
    login: async(req,res)=>{
            swagger.tags = ['Authentication']
            swagger.summary = 'JWT: Login'
            swagger.description = 'Login with username and password'
            _swagger.deprecated = true
            _swagger.ignore = true
            swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    username: 'test',
                    password: '1234'
                }
            }

        // userdan username ve password al
        const {username,password}= req.body

        if(username && password){   // username ve pasword geldi ise
            // console.log('*** auth login')
            const user=await Personnel.findOne({ username , password})
            // console.log(user)
            if(user.isActive){

                const accessData={
                    _id:user._id,
                    departmentId:user.departmentId,
                    username:user.username,
                    firsname:user.firstName,
                    lastname:user.lastName,
                    isActive:user.isActive,
                    isAdmin:user.isAdmin,
                    isLead:user.isLead,
                    
                }    
            

                // const accessToken=jwt.sign(data,key,time )    
                const accessToken=jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '1m' } ) 

                const refreshData={   
                    
                    username:user.username,
                    password:user.password,
                } 
                const refreshToken=jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '2m' } ) 

                
                res.status(200).send({
                    error:false,
                    token:{
                        accessToken:accessToken,
                        refreshToken:refreshToken                        
                    }
                    // islogin:req.isLogin,        
                    // result: data,                  
                
                })
            

            }else{
                res.errStatusCode=401
                throw new Error('user not active')
            }


            
        
        }else{
            res.errStatusCode=401
            throw new Error('username or password missing')

        }



    },
    logout:async (req,res)=>{
        res.send({
                error:false,
                message:"you dont need lopgout"
        })
    },
    refresh: async(req,res)=>{
        

        // const {username,password}= req.body
        // const {username,password}= req.body?.token.refreshToken || null
        const refreshToken=req.body?.token.refreshToken
        const jwtData=jwt.verify(refreshToken,process.env.REFRESH_KEY)
        const {username,password}= jwtData
        console.log("***RT***");
        console.log(username);        
        console.log(password);        
        
        if(username && password){   // username ve pasword geldi ise
            // console.log('*** auth login')
            const user=await Personnel.findOne({ username})
            // console.log(user)
            if(user.isActive){

                const accessData={
                    _id:user._id,
                    departmentId:user.departmentId,
                    username:user.username,
                    firsname:user.firstName,
                    lastname:user.lastName,
                    isActive:user.isActive,
                    isAdmin:user.isAdmin,
                    isLead:user.isLead,
                    
                }    
            

                // const accessToken=jwt.sign(data,key,time )    
                const accessToken=jwt.sign(accessData,process.env.ACCESS_KEY,{expiresIn: '1m' } ) 

                const refreshData={   
                    
                    username:user.username,
                    password:user.password,
                } 
                const refreshToken=jwt.sign(refreshData,process.env.REFRESH_KEY,{expiresIn: '2m' } ) 

                
                res.status(200).send({
                    error:false,
                    token:{
                        accessToken:accessToken,
                        refreshToken:refreshToken                        
                    }
                    // islogin:req.isLogin,        
                    // result: data,                  
                
                })
            

            }else{
                res.errStatusCode=401
                throw new Error('user not active')
            }


            
        
        }else{
            res.errStatusCode=401
            throw new Error('username or password missing')

        }

       

    },

}
