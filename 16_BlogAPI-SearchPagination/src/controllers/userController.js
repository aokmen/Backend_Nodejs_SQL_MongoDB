/*      USER CONTROLLER     */
'use strict'

require('express-async-errors')
const {User} =require('../models/userModel')

module.exports.User={

    list: async(req,res)=>{

        const data = await User.find()

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async(req,res)=>{

        const data = await User.create(req.body)

        res.status(200).send({
            error: false,
            count: data.length,
            result: res.body,
            result: data            

        })
    },

    read: async(req,res)=>{
        
        const data = await User.findOne({_id:req.params.userId})
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    update: async(req,res)=>{
        
        const data = await User.updateOne({_id:req.params.userId},req.body)
               
        res.status(202).send({
            error: false,
            count: data.length,
            result: data,
            newData: await User.findOne({_id:req.params.userId})
        })
    },
    delete: async(req,res)=>{
        
        const data = await User.deleteOne({_id:req.params.userId})
        console.log(data);        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    },
    
    
    //  LOGIN LOGOUT
    login: async(req,res)=>{
        
        const {email, password}=req.body
        // console.log('**********');            
        // console.log(req.body);
    

        if(email && password){
            //const user = await User.findOne({email: email, password: paswordEncrypte(password)})
            const user = await User.findOne({email: email, password: password})
            
            if(user){
                
                req.session={
                    user:{
                        email: user.email,
                        password: user.password
                    }
                }
                // milisaniye
                if(req.body.rememberMe){
                    req.sessionOptions.maxAge=1000 * 60 *60 * 24
                }
                    

                console.log('**********');            
                console.log(req.session);

                res.status(200).send({
                    error: false,
                    result: user,
                    userlogin: 'ok'
                    
                })
            }
            else{
                res.errorStatusCode=401
                throw new Error(' user not found')
            }


        }
        else{
            res.errorStatusCode=400
            throw new Error(' email and password required fields')
        }


        
    },

}

