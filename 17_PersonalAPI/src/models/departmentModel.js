

'use strict'

// const mongoose = require('../configs/dbConnection')
const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }},
    {
        collection:'department',
        timestamps:true
    }
    )
module.exports = mongoose.model('Department',DepartmentSchema)