"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "first_name": "admin",
    "last_name": "admin",
    "is_active": true,
    "is_staff": true,
    "is_superadmin": true
}
{
    "username": "staff",
    "password": "aA*123456",
    "email": "staff@site.com",
    "first_name": "staff",
    "last_name": "staff",
    "is_active": true,
    "is_staff": true,
    "is_superadmin": false
}
{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "first_name": "test",
    "last_name": "test",
    "is_active": true,
    "is_staff": false,
    "is_superadmin": false
}
/* ------------------------------------------------------- */

const BrandSchema = new mongoose.Schema({

    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true
    },
    
    image: {
        type: String,
        trim: true
    },
    
  },{
    collection: 'brands',
    timestamps: true
  })
  
 
  BrandSchema.pre(['init'], function (data) {

   data.id = data._id
   data.createds = data.createdAt.toLocaleDateString('tr-tr')

})


  module.exports=mongoose.model('Brand', BrandSchema)