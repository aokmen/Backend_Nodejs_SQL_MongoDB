/*      BLOG CONTROLLER     */
'use strict'
require('express-async-errors')
const {BlogPost,BlogCategory} =require('../models/blogModel')

module.exports.BlogCategory={

    list: async(req,res)=>{

        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async(req,res)=>{

        const data = await BlogCategory.create(req.body)

        res.status(200).send({
            error: false,
            count: data.length,
            result: res.body,
            result: data            

        })
    },

    read: async(req,res)=>{
        
        const data = await BlogCategory.findOne({_id:req.params.categoryId})
        // const data = await BlogCategory.findById(req.params.categoryId)
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    update: async(req,res)=>{
        
        const data = await BlogCategory.updateOne({_id:req.params.categoryId},req.body)
               
        res.status(202).send({
            error: false,
            count: data.length,
            result: data,
            newData: await BlogCategory.findOne({_id:req.params.categoryId})
        })
    },
    delete: async(req,res)=>{
        
        const data = await BlogCategory.deleteOne({_id:req.params.categoryId})
        console.log(data);        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    }
}


module.exports.BlogPost={

    list: async(req,res)=>{
       
        /* -------------------------------- Searching ------------------------------- */

        console.log(req.query);

        const data = await BlogPost.find({title:'test'})

        //const data = await BlogPost.find().populate("categoryId")

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async(req,res)=>{
        // const data=await BlogPost
        const data = await BlogPost.create(req.body)

        res.status(200).send({
            error: false,
            // count: data.length,
            result: res.body,
            result: data
            

        })
    },

    read: async(req,res)=>{
        
        // const data = await BlogPost.findOne({_id:req.params.postId}).populate("categoryId")
        // const data = await BlogPost.findById(req.params.postId)
        const data = await BlogPost.find({categoryId:req.params.categoryId})
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    update: async(req,res)=>{
        
        const data = await BlogPost.updateOne({_id:req.params.postId},req.body)
               
        res.status(202).send({
            error: false,
            count: data.length,
            result: data,
            newData: await BlogPost.findOne({_id:req.params.postId})
        })
    },
    delete: async(req,res)=>{
        
        const data = await BlogPost.deleteOne({_id:req.params.postId})
        console.log(data);        
        
        res.status((data.deletedCount>=1)? 202:404).send({
            error: false     
        })
        // res.sendStatus((data.deletedCount>=1)? 202:404)
    
    }
}
