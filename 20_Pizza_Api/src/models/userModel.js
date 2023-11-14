'use strict'
// const {model} = require(mongoose)
const {mongoose} = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')


const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password: {
        type:String,
        trim:true,
        required:true,
        set:(password)=>passwordEncrypt(password)
    },
    email: {
        type:String,
        trim:true,
        required:[true,'Email must be required'],
        unique:[true,'Email must be unique'],
        validate:[(email)=>(email.includes('@') && email.includes('.')),'Email not correct'],
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
   
},{
    collection:'user',
    timestamps:true
})
module.exports = mongoose.model('User',UserSchema)