/* -------------------------- departmentController -------------------------- */

'use strict'
require('express-async-errors')
const Personal = require('../models/personalModel')

module.exports={
    list: async(req,res) =>{
         const data = await Personal.find()
        // const data = await res.getModelList(Personal,"id")
        res.status(200).send({
            error: false,
            result: data
        })
    },
    read: async(req,res) =>{
        const data = await Personal.findOne({_id:req.params.id})
        res.status(200).send({
            error: false,
            result: data
        })
    },
    create: async(req,res) =>{
        const data = await Personal.create(req.body)
        res.status(200).send({
            error: false,
            result: data
        })
    },
    update: async(req,res) =>{
        const data = await Personal.updateOne({_id:req.params.id},req.body,{runValidators:true})  // {runValidators:true} >> bu yöntemle update isleminde email sartlarina uymak zorunda. Eger yazilmazsa put,update isleminde email @ veya. olmadan kabul eder, hata vermez
        res.status(202).send({
            error: false,
            result: data
        })
    },
    delete: async(req,res) =>{
        const data = await Personal.deleteOne({_id:req.params.id})
        res.status((data.deletedCount>=1)? 202:404).send({  // 404 silinen dosyayi tekrar silmek istersek
            error: false     
        })
    },

    // Login - Logout
    login: async(req,res) =>{

        const {username, password}=req.body

        

        if(username && password){
            const user = await Personal.findOne({username: username, password: password})
           if(user){

            res.status(200).send({
                error: false,
                result: user,
                userlogin: 'ok'
                
            })
           }

           else{

           } 
        }
        else{
            res.errorStatusCode=401
            throw new Error(' username or password missing')
        }
    },
    logout: async(req,res) =>{
        res.status(200).send({
            error: false,
            message: "user logout",
            userlogout: 'ok'
            
        })
    }
}