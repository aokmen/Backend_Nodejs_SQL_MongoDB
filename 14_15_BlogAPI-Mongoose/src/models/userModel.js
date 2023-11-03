/*      BLOGAPI USER MODEL      */

'use strict'

const mongoose=require('mongoose')
const paswordEncrypte=require('../helpers/paswordEncrypte')


const UserSchema=new mongoose.Schema({
    // _id 
    firstName: {
        type : String,
        trim: true        
    },

    lastName: String,
       
    email: {
        type : String,
        required: [true," You must enter email"],
        trim: true,
        unique: true, 
        validate:[
            (email)=>( email.includes('@') && email.includes('.'))
        ]       
    },
    password: {
        type : String,
        required: true,
        trim: true,
        set:(password)=>paswordEncrypte(password)

    },
    },
    
    {
        collection: 'users',      
        timestamps: true        
    })


  module.exports={
        User: mongoose.model('User', UserSchema),
        
  }
  

