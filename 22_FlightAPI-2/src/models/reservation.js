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
// Reservation Model:


const ReservationSchema = new mongoose.Schema({

    flightId : {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Flight',
        required: true,        
    },
    // passangerId : {
    //     type: mongoose.Schema.Types.ObjectId ,
    //     ref: 'Passanger',
    //     required: true,        
    // },

    // passangerId : [
    //    {
    //     type: mongoose.Schema.Types.ObjectId ,
    //     ref: 'Passanger',
    //     required: true,        
    // }
    //],
    passengers: [],

    createdId : {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'User',
        required: true,        
    },
    

}, { collection: 'reservations', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Reservation', ReservationSchema)