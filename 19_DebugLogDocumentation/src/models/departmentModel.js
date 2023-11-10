//! -----   PersonnelAPI    -----
//? departmentModel

'use strict'

// const {mongoose}=require('mongoose')
const {mongoose}=require('../configs/dbConnection')

const DepartmentSchema= new mongoose.Schema(
    
    {
        name:{
            type: String,
            trim: true,
            require: true,
            unique: true

        }
    },
    {
        collection:'departments',
        timestapms: true
    }
)
module.exports=mongoose.model('Department',DepartmentSchema)
