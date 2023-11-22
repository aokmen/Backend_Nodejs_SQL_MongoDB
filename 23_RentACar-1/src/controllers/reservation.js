"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Reservation Controller:

const Reservation = require('../models/reservation')

module.exports = {

    list: async(req,res) => {
                /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Reservation)
       res.status(200).send({
        result: "Success listed",
        details: await res.getModelListDetails(Reservation),
        data,
       })
    },
    create: async(req,res) => {
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   
                }
            }
        */
       const data = await Reservation.create(req.body)
       res.status(201).send({
            result: "Success created",
            data
       })
    },

    read: async(req,res) => {

       const data = await Reservation.findOne({_id:req.params.id})
       res.status(200).send({
            result: "Success read",
            data
       })
    },
    update: async(req,res) => {
             /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    
                }
            }
        */
       const data = await Reservation.updateOne({_id:req.params.id},req.body, {runValidators:true})
            res.status(202).send({
                result: "Success updated",
                data,
                new: await Flight.findOne({ _id: req.params.id })
            })

    },
    delete: async(req,res) => {
         /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */
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