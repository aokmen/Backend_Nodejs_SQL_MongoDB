"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Token Controller:

const Token = require('../models/token')

module.exports = {

    list: async(req,res) => {
               
            /* #swagger.ignore = true */

       const data = await res.getModelList(Token)
       res.status(200).send({
        result: "Success listed",
        details: await res.getModelListDetails(Token),
        data,
       })
    },
    create: async(req,res) => {

               // #swagger.ignore = true

       const data = await Token.create(req.body)
       res.status(201).send({
            result: "Success created",
            data
       })
    },

    read: async(req,res) => {

       const data = await Token.findOne({_id:req.params.id})
       res.status(200).send({
            result: "Success read",
            data
       })
    },
    update: async(req,res) => {

                // #swagger.ignore = true

       const data = await Token.updateOne({_id:req.params.id},req.body, {runValidators:true})
            res.status(202).send({
                result: "Success updated",
                data,
                new: await Flight.findOne({ _id: req.params.id })
            })

    },
    delete: async(req,res) => {

                   // #swagger.ignore = true
   
        const data = await User.deleteOne({_id:req.params.id})

        // res.status(204).send({
        //     result: "Success removed",
        //     data,
        // })
        res.status(data.deletedCount ? 204 : 404).send({
            result: "Success removed",
            data
        })

    },

}