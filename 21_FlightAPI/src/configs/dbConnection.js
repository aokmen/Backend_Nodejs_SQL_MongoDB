'use strict'

const mongoose = require('mongoose')

const  dbConnection = function(){
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB NOT connected',err))
}

module.exports = {
    mongoose, dbConnection
}