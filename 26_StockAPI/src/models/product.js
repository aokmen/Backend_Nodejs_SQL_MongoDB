"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */

const ProductSchema = new mongoose.Schema({

    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Category",
      required: true
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required: true
      },
    name: {
        type: String,
        trim: true,
        required:true
      },
      stock: {
        type: Number,
        default:0
      },
    
    
  },{
    collection: 'products',
    timestamps: true
  })
  
 
  ProductSchema.pre(['init'], function (data) {

   data.id = data._id
   data.createds = data.createdAt.toLocaleDateString('tr-tr')

})


  module.exports=mongoose.model('Product', ProductSchema)