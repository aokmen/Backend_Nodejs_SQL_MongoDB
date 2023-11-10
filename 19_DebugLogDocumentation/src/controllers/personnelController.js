//! -----   PersonnelAPI    -----
//? personnelController

'use strict'

const Personnel=require('../models/personnelModel')
module.exports={
    list: async(req,res)=>{
        // const data=await Personnel.find()
        const data=await res.getModelList(Personnel)
        res.status(200).send({
            error:false,
            islogin:req.isLogin,        
            result: data,
            
        
        })

    },

    create: async(req,res)=>{

        const isLead=req.body?.isLead || false
        if(isLead){
            await Personnel.updateMany({departmentId:req.body.departmentId, isLead:true},{isLead:false})

        }

        const data=await Personnel.create(req.body)
        res.status(201).send({
            error:false,            
            // result: data   
            // data:data
            data
        
        })

    },
    read: async(req,res)=>{
        const data=await Personnel.findOne({_id:req.params.id})
        res.status(200).send({
            error:false,            
            result: data   
        
        })

    },
    update: async(req,res)=>{

        const isLead=req.body?.isLead || false
        if(isLead){
            const { departmentId }=await Personnel.findOne({_id:req.params.id})    
            await Personnel.updateMany({departmentId: departmentId, isLead:true},{isLead:false})

        }
        const data=await Personnel.updateOne({_id:req.params.id},req.body,{runValidators:true })
        res.status(202).send({
            error:false,            
            result: data   
        
        })

    },
    
    delete: async(req,res)=>{
        
        const data = await Personnel.deleteOne({_id:req.params.id})        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    },
    /*
    // LOGIN LOGOUT
    login: async(req,res)=>{

        const {username,password}=req.body 

        if(username && password){
            const user=await Personnel.findOne({ username , password})
            if(user){

                req.session={
                    id: user._id,
                    password: user.password

                }
                if(req.body.rememberMe){
                    req.sessionOptions.maxAge=1000*60*60*24
                }            


                res.status(200).send({
                    error:false,
                    user:user
                })

            }
            else{
                res.errStatusCode=401
                throw new Error('wrong username or password')
            }

        }
        else{
            res.errStatusCode=401
            throw new Error('username or password missing')
        }

    },
    logout: async(req,res)=>{
        req.session=null
        res.status(200).send({
            error:false,
            message:'user logout'
        })

    }
    */
}

