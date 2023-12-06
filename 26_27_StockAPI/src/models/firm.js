"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */

const FirmSchema = new mongoose.Schema({

    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true
    },
    phone: {
        type: String,
        trim: true,
      },
      address: {
        type: String,
        trim: true,
      },
      image: {
        type: String,
        trim: true,
      },


    
  },{
    collection: 'firms',
    timestamps: true
  })
  
 
  FirmSchema.pre(['init'], function (data) {

   data.id = data._id
   data.createds = data.createdAt.toLocaleDateString('tr-tr')

})


  module.exports=mongoose.model('Firm', FirmSchema)