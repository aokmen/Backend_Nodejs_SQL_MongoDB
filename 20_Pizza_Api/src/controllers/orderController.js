
'use strict'

const Order = require('../models/orderModel')

module.exports ={
    list: async (req,res) =>{
        const data = await res.getModelList(Order)
        // const data = await Order.find()
        res.status(200).send({
            result: 'Success listed',
            detail: await res.getModelListDetails(Order),
            data
        })
    },
    create: async (req,res) =>{
        req.body.totalPrice = req.body.quantity * req.body.price
        const data = await Order.create(req.body)
        res.status(201).send({
            result: 'Success created',
            data
        })
    },
    read: async (req,res) =>{
        const data = await Order.findOne({_id:req.params.id})
        res.status(200).send({
            result: 'Success read with ID',
            data
        })
    },
    update: async (req,res) =>{
        const data = await Order.updateOne({_id:req.params.id},req.body,{runValidators:true})
        res.status(202).send({
            result: 'Success updated',
            new: await Order.findOne({_id:req.params.id}),
            data
        })
    },
    delete: async (req,res) =>{
        const data = await Order.deleteOne({_id:req.params.id})

        res.status(data.deletedCount>=1 ? 202:404).send({
            result: 'Success deleted',
            data
        })
    },

}