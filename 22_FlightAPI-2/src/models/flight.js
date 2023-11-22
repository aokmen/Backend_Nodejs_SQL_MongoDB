"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    // "username": "test",
    // "password": "1234",
    // "email": "test@site.com",
    // "isActive": true,
    // "isStaff": false,
    // "isAdmin": false,
}
/* ------------------------------------------------------- */
// Fligt Model:


const FlightSchema = new mongoose.Schema({

    flightNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    airline: {
        type: String,
        trim: true,
        required: true,        
    },
    departure: {
        type: String,
        trim: true,
        required: true,        
    },
    departureDate : {
        type: Date,
        required: true,        
    },
    arrival: {
        type: String,
        trim: true,
        required: true,        
    },
    arrivalDate : {
        type: Date,
        required: true,        
    },
    createdId : {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'User',
        required: true,        
    },
    
}, { collection: 'flights', timestamps: true })


const dateToLocaleString=require('../helpers/dateToLocaleString')

FlightSchema.pre('init', function(document){
    document.departureDateStr=dateToLocaleString(document.departureDate)
    document.arriveleDateStr=dateToLocaleString(document.arrivalDate)
    // document.departureDate.toLocaleString('tr-tr', { dateStyle: 'full', timeStyle: 'medium' })
    document.__v=undefined
    // document.departureDate=undefined

}
)

/* ------------------------------------------------------- */
module.exports = mongoose.model('Flight', FlightSchema)