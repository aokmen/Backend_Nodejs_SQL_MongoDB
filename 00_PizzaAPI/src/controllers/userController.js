'use strict'

const User = require('../models/userModel')


module.exports = {
    list: async(req,res) => {
        const data = await User.find()
        res.status(200).send({
            result: "Success listed",
            data
        })
    },

    create: async(req,res) => {
        const data = await User.create(req.body)
        res.status(201).send({
            result: "Success created",
            data 
        })
    },
    read: async(req,res) => {
        const data = await User.findOne({_id:req.params.id})
        res.status(201).send({
            result: "Success read",
            data 
        })
    },
    update: async(req,res) => {
        const data = await User.updateOne({_id:req.params.id},req.body)
        res.status(202).send({
            result: "Success updated",
            data 
        })
    },
    delete: async(req,res) => {
        const data = await User.deleteOne({_id:req.params.id})
        res.status((data.deletedCount>=1) ? 202: 404).send({
            result: "Success removed",
            data  
        })
    },
}