'use strict'

const {mongoose} = require('../configs/dbConnection')

const ToppingSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true,
        unique:true
    },
  
   
},{
    collection:'topping',
    timestamps:true
})
module.exports = mongoose.model('Topping',ToppingSchema)