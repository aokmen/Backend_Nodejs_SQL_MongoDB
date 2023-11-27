"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// User Controller:

const User = require('../models/user')
const Token = require('../models/token')
const passwordEncrypt = require('../helpers/passwordEncrypt')
const sendMail = require('../helpers/sendMail-func')
module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(User)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: { }
            }
        */

        const data = await User.create(req.body)

            /*TOKEN*/ 
            // Generate token for new user
            let tokenKey = passwordEncrypt(data._id + Date.now)
            let tokenData = await Token.create({userId:data._id, token:tokenKey})

            /*TOKEN*/ 

            sendMail(
                data.email, //to
                'Welcome', // subject
                `<p> Your username: ${data.username} </p>`
            )

        res.status(201).send({
            error: false,
            token:tokenData.token,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */

       // Filters:
       let filters = {}
       // Only self records. except admin:
       if (!req?.user.isAdmin) filters._id = req.user._id

        const data = await User.findOne({ _id: req.params.id, ...filters })

        res.status(200).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
        // Filters:
        let filters = {}
        // Only self records. except admin:
        if (!req?.user.isAdmin) {
            filters.userId = req.user._id
            req.body.isAdmin = false
        }

        const data = await User.updateOne({ _id: req.params.id,...filters }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await User.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */

        const data = await User.deleteOne({ _id: req.params.id })
        
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