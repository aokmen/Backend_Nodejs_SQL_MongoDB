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
    /* -------------------------------------------------------------------------- */
    /*                                  Searching                                 */
    /* -------------------------------------------------------------------------- */

    list: async(req,res)=>{

    // const search = req.query.search    
    // const sort=req.query.sort   
    // const data = wait BlogPost.find({title: {$regex: 'Test 1', $options: 'i' }} ) // büyük/küçük harfe duyarlı değil
    // const data = BlogPost.find(search).sort('title')    //? sıralama
    // const data = await BlogPost.find({title:'test 0 title'})
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
     const search = req.query.search
    // { <field>: { $regex: 'pattern', $options: '<options>' } }  // option >> i olursa büyük kück harf duyarli olmasin
   
    // const data = await BlogPost.find({title: { $regex: search['test 13'], $options: 'i' } }) >> test 13 icegen
    // const data = await BlogPost.find({title: { $regex: search.title, $options: 'i' } })  >> title a göre ara
    //   const data = await BlogPost.find().populate("categoryId")
    
    for(let key in search)search[key]={$regex: search[key], $options: 'i' } 
    //    console.log(req.query.search);

    /* --------------------------------- Sorting -------------------------------- */
         
    // const sort = req.query.sort
     // Sıralama bilgisini URL'den alın ve sıralama nesnesine çevirin
    const sort = {}
    if (req.query.sort) {
    const sortParams = req.query.sort;
    for (const key in sortParams) {
        sort[key] = parseInt(sortParams[key]);
    }
    }
    // const data = await BlogPost.find(search).sort(sort)
    
    /* ------------------------------ Page & Limit ------------------------------ */

    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : null
    let page = Number(req.query?.page)
    page = (page > 0 ? page : 1) - 1
    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : (page*limit)

    // const data = await BlogPost.find(search).limit(limit).page(3)
    // const data = await BlogPost.find(search).skip(skip).limit(limit)
    const data = await res.getModelList(BlogPost,"categoryId") 
  
        res.status(200).send({
            error: false,
            count: data.length,
            result: data,
            detail : await res.getModelListDetail(BlogPost)
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
