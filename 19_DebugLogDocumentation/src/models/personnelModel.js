//! -----   PersonnelAPI    -----
//? personnelModel

'use strict'

// const {mongoose}=require('mongoose')
const {mongoose}=require('../configs/dbConnection')
const paswordEncrypte=require('../helpers/paswordEncrypte')

const PersonnelSchema= new mongoose.Schema(
    
    {
        departmentId:{
            type: mongoose.Schema.ObjectId,
            ref:'Department',
            require: true,       

        },
        username:{
            type: String,
            trim: true,
            require: true,
            unique: true
        },
        password:{
            type: String,
            trim: true,
            require: true,
            set: (password)=>paswordEncrypte(password)

        },
        firsName:{
            type: String,
            trim: true,
            require: true,
            
        },
        lastName:{
            type: String,
            trim: true,
            require: true,
            
        },
        phone:{
            type: String,
            trim: true,
            require: true,
            
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
        collection:'personnels',
        timestapms: true
    }
)
module.exports=mongoose.model('Personnel',PersonnelSchema)
