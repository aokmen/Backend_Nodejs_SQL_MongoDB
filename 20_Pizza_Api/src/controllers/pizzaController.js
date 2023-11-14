
'use strict'

const Pizza = require('../models/pizzaModel')

module.exports ={
    list: async (req,res) =>{
        const data = await res.getModelList(Pizza,{},'toppings')
        // const data = await Pizza.find()
        res.status(200).send({
            result: 'Success listed',
            detail: await res.getModelListDetails(Pizza),
            data
        })
    },
    create: async (req,res) =>{
        const data = await Pizza.create(req.body)
        res.status(201).send({
            result: 'Success created',
            data
        })
    },
    read: async (req,res) =>{
        const data = await Pizza.findOne({_id:req.params.id})
        res.status(200).send({
            result: 'Success read with ID',
            data
        })
    },
    update: async (req,res) =>{
        const data = await Pizza.updateOne({_id:req.params.id},req.body,{runValidators:true})
        res.status(202).send({
            result: 'Success updated',
            new: await Pizza.findOne({_id:req.params.id}),
            data
        })
    },
    delete: async (req,res) =>{
        const data = await Pizza.deleteOne({_id:req.params.id})

        res.status(data.deletedCount>=1 ? 202:404).send({
            result: 'Success deleted',
            data
        })
    },

}