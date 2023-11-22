"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "admin",
    "password": "1234",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isAdmin": true
}
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "firstName": "test",
    "lastName": "test",
    "isActive": true,
    "isAdmin": false
}
/* ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },

},{collection:"users",timestamps:true})

const passwordEncrypt = require('../helpers/passwordEncrypt')

UserSchema.pre('save', function(next){

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const isEmailValidated = this.email ? emailRegex.text(this.email) : true

if(isEmailValidated){
    if(this?.password){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
        const isPasswordValidated = passwordRegex.text(this.password)
        if(isPasswordValidated){
            this.password = passwordEncrypt(this.password)
        } else{
            next(new Error('Password not validated'))
        }
        
    } 
    next() // Allow to save
}else{
    next(new Error('Email not validated'))
}

return next()

})  // kaydetmeden hemen önce bu parametreleri calistir

module.exports = mongoose.model('Car',CarSchema)