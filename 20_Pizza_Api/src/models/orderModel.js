'use strict'

const {mongoose} = require('../configs/dbConnection')

const OrderSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    pizzaId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Pizza',
        required:true,
    },
    size: {
        type:String,
     
        enum:['Small','Medium','Large'],
    },
    quantity: {
        type:Number,
        required:true,
        default:1
    },
    price: {
        type:Number,
        required:true,
    },
    totalPrice: {
        type:Number,
    },
   
},{
    collection:'orders',
    timestamps:true
})
module.exports = mongoose.model('Order',OrderSchema)