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

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
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

    isActive: {
        type: Boolean,
        default: true,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    }

}, { collection: 'users', timestamps: true })

/* ------------------------------------------------------- */
// Schema Configs:

const passwordEncrypt = require('../helpers/passwordEncrypt')

// Monggose Middleware (Trigger):
// save: Only Create
UserSchema.pre(['save', 'updateOne'], function(next) {

    const data = this?._update || this
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isEmailValidated = data.email ? emailRegex.test(data.email) : true

    if (isEmailValidated) {

        if (data?.password) {

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
            const isPasswordValidated = passwordRegex.test(data.password)

            if (isPasswordValidated) {

                data.password = passwordEncrypt(data.password)
                this.password = data.password // for create
                this._update = data // for update

            } else {
                
                return next( new Error('Password not validated.') )
            }
        }

        return next() // Allow to save.

    } else {
        
        return next( new Error('Email not validated.') )
    }
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)