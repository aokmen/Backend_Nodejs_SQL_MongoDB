/* -------------------------------------------------------------------------- */
/*                      Blogapi Models with Mongoose                          */
/* -------------------------------------------------------------------------- */

'use strict'

const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
    // _id automatic created
    title:{
        type: String,
        // required: true,
        trim: true
    },
    content:{
        type: String, 
    }},
    {
        collection:'blogPost', 
        timestamps : true
    }
    )
    
const BlogPostModel = mongoose.model('BlogPost',blogPostSchema)
module.exports = {
    BlogPost : BlogPostModel
}


// const schemaName = new mongoose.Schema({
//     fieldName: {
//         type: String,
//         default: null,
//         unique:true,
//         index:true,
//         select: true, 
//         trim:true,
//         required:[true,'error message'],
//         enum: [[0,1,2],'error message'],
//         validate:[functionValidate=(data)=>{return true}, 'error message'],
//         get:functionValidate=(data)=>{return true}, // veriyi cagirinca calismasini istediginde get kullanilir
//         set:functionValidate=(data)=>{return true}, // veriye deger atayinca calismasini istediginde set kullanilir
//     }},
//     ,{
//     collection:'blogPost', 
//     timestamps : true
// })

