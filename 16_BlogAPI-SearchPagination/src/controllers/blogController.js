//! BLOG CONTROLLER 

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
 /* -------------------------------- Searching ------------------------------- */
    list: async(req,res)=>{

    const search = req.query.search    
    const sort=req.query.sort
   
    
    
    // const data = wait BlogPost.find({title: {$regex: 'Test 1', $options: 'i' }} ) // büyük/küçük harfe duyarlı değil
    //? sıralama
    // const data = BlogPost.find(search).sort('title')
    
    // const data = await BlogPost.find({title:'test'})

   const data = await BlogPost.find().populate("categoryId")
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },
    //belirli bir kategory icin yapılan postlar
    //  /blog/post
    listCategoryPosts: async(req,res)=>{
        
        const data = await BlogPost.find({categoryId:req.params.categoryId}).populate("categoryId")       
        
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
        
        const data = await BlogPost.findOne({_id:req.params.postId}).populate("categoryId")
        // const data = await BlogPost.findById(req.params.postId)
        
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
