

'use strict'

// const {mongoose} = require('../configs/dbConnection')
const mongoose = require('mongoose')
const paswordEncrypte=require('../helpers/paswordEncrypte')

const PersonalSchema = new mongoose.Schema({
    departmentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Department',
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required: true,
        trim: true,
        set:(password)=>paswordEncrypte(password)
    },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        require: true,
        validate:(email)=>(email.includes('@') && email.includes('.'))
                  
    },
    title:{
        type: String,
        trim: true,
        require: true,
        
    },
    salary:{
        type: Number,
        default:0
        
    },
    description:{
        type: String,
        trim: true,
        default:null           
        
    },
    isActive:{
        type:Boolean,
        default:true
        
    },
    isAdmin:{
        type:Boolean,
        default:false
        
    },
    isLead:{
        type:Boolean,
        default:false
        
    },
    startedAD:{
        type:Date,
        default:Date.now()
        
    },
},
    {
        collection:'personal',
        timestamps:true
    }
    )
module.exports = mongoose.model('Personal',PersonalSchema)