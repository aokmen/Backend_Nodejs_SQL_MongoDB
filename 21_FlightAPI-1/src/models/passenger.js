"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */
//Passenger Model:

const PassengerSchema = new mongoose.Schema({

   firstName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        enum:['M','F','D'],
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        unique: [true, 'There is this email. Email field must be unique'],
        validate: [
            // (email) => email.includes('@') && email.includes('.'),
            // 'Email type is not correct.'
            (email) => {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailRegex.test(email)
            },'Email type is not correct.'
        ]
    },

    createdId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },

}, { collection: 'passengers', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Passenger',PassengerSchema)