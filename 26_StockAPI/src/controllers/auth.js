"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS 
------------------------------------------------------- */

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    login: async(req,res)=>{
        const {email,username,password} = req.body
        if((email || username) && password){
            const user = await User.findOne({$or:[{username},{email}]})

            if(user && user.password == passwordEncrypt(password)){
                if(user.is_active){
                    //Token
                    let tokenData = await Token.findOne({user_id:user._id})
                    if(!tokenData) tokenData = await Token.create({
                        user_id:user._id,
                        token:passwordEncrypt(user._id + Date.now())
                    })
                    res.send({
                        error:false,
                        token:tokenData.token,
                        user
                    })
                } else{
                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            }else{
                res.errorStatusCode = 401
                throw new Error('Wrong username/email or password.') 
            }
        }else{
            res.errorStatusCode = 401
            throw new Error('Please enter username/email and password.')
        }
    },
    logout: async(req,res)=>{
        const auth = req.headers?.authorization || null
        const tokenKey = auth ? auth.split(" ") : null

        let result={}
        if(tokenKey && tokenKey[0]=='Token'){
            result = await Token.deleteOne({token:tokenKey[1]})
        }
        res.send({
            error:false,
            message: 'Logout success',
            result
        })
    },
}