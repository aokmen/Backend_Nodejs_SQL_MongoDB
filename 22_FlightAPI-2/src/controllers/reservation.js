"use strict"
const passenger = require('../models/passenger')
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Reservation Controller:

const Reservation = require('../models/reservation')

module.exports = {

    list: async (req, res) => {
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

        const data = await res.getModelList(Reservation,{},'passengers')

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Reservation),
            data
        })
    },

    create: async (req, res) => {
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
        const Passanger = require('../models/passenger')

        let passengerInfos=req.body?.passengers || []   
        let  passengerIds=[] // doğrulanan passenger ların listesi
        let passenger=false
        
        for(let passengerInfo of passengerInfos){
            
            if(typeof passengerInfo=="object" ){ // obje ise
                passenger=await Passanger.findOne({email : passengerInfo.email} )
                if(passenger){ // yolcu var ise
                    passengerIds.push(passenger._id)        

                }else { //bu emaişle sahip yolcu yok ise

                    Object.assign(passengerInfo,{createdId: req.body.createdId})
                    passenger=await Passanger.create(passengerInfo)
                    passengerIds.push(passenger._id)

                }

            }else{  // id ise
                console.log(passengerInfo)

                const passenger=await Passanger.findOne({ _id : passengerInfo} )

                if(passenger)  passengerIds.push(passenger._id)

            }
        }

        req.body.passengers=passengerIds

        const data = await Reservation.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */

        const data = await Reservation.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
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

        const data = await Reservation.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Reservation.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */

        const data = await Reservation.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}