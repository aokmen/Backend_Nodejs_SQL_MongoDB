"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Car Controller:

const Car = require('../models/car')
const Reservation = require('../models/reservation')
module.exports = {

    list: async(req,res) => {
                /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "List Cars"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        // Filters:
        let filters = {}

        // Show only isPublish=true cars. Except Admin.
        // if (!req.user?.isAdmin) filters = { isPublish: true }
        if (!req.user?.isAdmin) filters.isPublish = true

        /* Available Cars */
        // List with date filter:
        // http://127.0.0.1:8000/cars?start=2023-10-13&end=2023-10-18
        const { start: getStartDate, end: getEndDate } = req.query

         if (getStartDate && getEndDate) {

            const reservedCars = await Reservation.find({
                $nor:[ //reserve edilmemis araclari verme
                { startDate: { $gt: getEndDate } },// r.s>t.e
                { endDate: { $lt: getStartDate } }, //reservesyon bitis tarihi müsterinin talep ettigi baslangic tarihinden kücük mü
                ]
            }, { _id: 0, carId: 1 }).distinct('carId')
            // console.log(reservedCars)
            /*
            distinct() convert from:
            [
                { carId: new ObjectId("65352f518a9ea121b1ca5001") },
                { carId: new ObjectId("65352f518a9ea121b1ca5002") }
            ]
            to:
            [
                new ObjectId("65352f518a9ea121b1ca5001"),
                new ObjectId("65352f518a9ea121b1ca5002")
            ]
            */
            if (reservedCars.length) {
                filters._id = { $nin: reservedCars }
            }
            console.log(filters)
        }
        /* Available Cars */

        const data = await res.getModelList(Car, filters)

        res.status(200).send({
            result: "Success listed",
            details: await res.getModelListDetails(Car, filters),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Create Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { }
            }
        */

        if (req?.user) {
            // Set userIds from login info:
            req.body.createdId = req.user._id
            req.body.updatedId = req.user._id
        }

        const data = await Car.create(req.body)

        res.status(201).send({
            result: "Success created",
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Get Single Car"
        */

        const data = await Car.findOne({ _id: req.params.id })

        res.status(200).send({
            result: "Success read",
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Update Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */

        if (req?.user) {
            // Set userIds from login info:
            req.body.updatedId = req.user._id
        }

        const data = await Car.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            result: "Success updated",
            data,
            new: await Car.findOne({ _id: req.params.id })
        })
    },

    delete: async(req,res) => {
         /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Delete Car"
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