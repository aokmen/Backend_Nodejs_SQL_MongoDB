/*  BLOG API MONGODB DATABASE CONNECTION */

'use strict'

const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1/27017/personalAPI')

const dbConnection = function(){
    mongoose.connect(process.env.MONGODB)
    .then(()=>console.log('DB connected'))
    .catch((err)=>console.log('DB NOT connected',err))
}
module.exports = {
    mongoose,
    dbConnection
}
