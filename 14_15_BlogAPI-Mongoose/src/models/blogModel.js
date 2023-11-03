/*  BLOGAPI MODELS  with MONGOOSE*/

'use strict'

const mongoose=require('mongoose')

const blogCategorySchema=new mongoose.Schema({
    // _id 
    name: {
        type : String,
        required: true,
        trim: true        
    }},
    {
        collection: 'blogCategories',      
        timestamps: true        
    })


const blogPostSchema=new mongoose.Schema({
    // _id 
    userId: {
        type : mongoose.Schema.ObjectId,
        ref:'User',
        required: true,
        trim: true        
    },
    title: {
        type : String,
        required: true,
        trim: true        
    },
    content: {
        type : String,
        require: true,
        trim: true  

    }},
    {
        collection: 'blogPosts',      
        timestamps: true        
    })

//   const BlogPostModel=mongoose.model('BlogPost',blogPostSchema)  
  module.exports={
        BlogPost: mongoose.model('BlogPost',blogPostSchema),
        BlogCategory: mongoose.model('BlogCategory',blogCategorySchema)
  }
  

/*
const schemaName=new mongoose.Schema({
    fialdName: {
        type:String,
        default: null, 
        unique: true,
        index: true,    // aramlar iin index yapısı oluşturuyor
        select: true,   // veri çağrıldığında gelsin mi?
        trim: true,     // gelen veriyi trim ler
        require: [true, ' error message'], 
        enum: [[0,1,2], 'error message' ],
        validate:[functionValidate(data){return true}, 'error message'],
        get: functionValidate(data){return true}, // veriyi çağırınca çalışmasını istediğim fonksiyonlar
        set: functionValidate(data){return true}, // veriye değer atanınca çalışmasını istediğim fonksiyonlar

    },
    {
        collection:'collectionName', // tanlo ismi
        timestamp : true


    }


})*/
