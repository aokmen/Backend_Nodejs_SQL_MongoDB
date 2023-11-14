
'use strict'

const Topping = require('../models/toppingModel')

module.exports ={
    list: async (req,res) =>{
        const data = await res.getModelList(Topping)
        // const data = await Topping.find()
        res.status(200).send({
            result: 'Success listed',
            isLogin:req.isLogin,
            detail: await res.getModelListDetails(Topping),
            data
        })
    },
    create: async (req,res) =>{
        const data = await Topping.create(req.body)
        res.status(201).send({
            result: 'Success created',
            data
        })
    },
    read: async (req,res) =>{
        const data = await Topping.findOne({_id:req.params.id})
        res.status(200).send({
            result: 'Success read with ID',
            data
        })
    },
    update: async (req,res) =>{
        const data = await Topping.updateOne({_id:req.params.id},req.body,{runValidators:true})
        res.status(202).send({
            result: 'Success updated',
            new: await Topping.findOne({_id:req.params.id}),
            data
        })
    },
    delete: async (req,res) =>{
        const data = await Topping.deleteOne({_id:req.params.id})

        res.status(data.deletedCount>=1 ? 202:404).send({
            result: 'Success deleted',
            data
        })
    },

}