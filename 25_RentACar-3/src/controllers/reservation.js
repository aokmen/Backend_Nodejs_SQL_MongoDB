"use strict"
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

        // Filters:
        let filters = {}
        // Only self records. except admin:
        if (!req?.user.isAdmin) filters.userId = req.user._id

        const data = await res.getModelList(Reservation, filters, ['userId', 'carId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Reservation, filters),
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
                schema: { }
            }
        */

        // get userId from loginedUser.
        req.body.userId = req?.user._id;

        // Check new reservations date in exists reservations:
        const userRevervationsInDates = await Reservation.findOne({
            userId: req.body.userId,
            $nor: [
                { startDate: { $gt: req.body.endDate } },
                { endDate: { $lt: req.body.startDate } },
            ]
        })

        if (userRevervationsInDates) {

            res.errorStatusCode = 400
            // throw new Error('It cannot be added because there is another reservation with the same date.')
            throw new Error(
                'It cannot be added because there is another reservation with the same date.',
                { cause: { userRevervationsInDates }  }
            )

        } else {

            const data = await Reservation.create(req.body)
    
            res.status(201).send({
                error: false,
                data
            })
        }
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */

        // Filters:
        let filters = {}
        // Only self records. except admin:
        if (!req?.user.isAdmin) filters.userId = req.user._id

        const data = await Reservation.findOne({ _id: req.params.id, ...filters }).populate(['userId', 'carId'])

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

        // res.status(204).send({
        //     error: false,
        //     data
        // })

        const statusCode = data.deletedCount ? 204 : 404
        res.status(statusCode).send({
            error: false,
            data
        })
    },
}