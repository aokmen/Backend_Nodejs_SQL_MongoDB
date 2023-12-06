"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */

const CategorySchema = new mongoose.Schema({

    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true
    },
   
    
  },{
    collection: 'categories',
    timestamps: true
  })
  
 
  CategorySchema.pre(['init'], function (data) {

   data.id = data._id
   data.createds = data.createdAt.toLocaleDateString('tr-tr')

})


  module.exports=mongoose.model('Category', CategorySchema)