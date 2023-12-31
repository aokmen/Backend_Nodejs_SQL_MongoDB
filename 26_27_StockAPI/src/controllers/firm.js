"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Firm Controller:
const Firm = require('../models/firm')
module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "List Firms"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Firm)
       res.status(200).send(data)
        // error:false,
        // detail: await res.getModelListDetails(Firm),

    },
    create: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Create Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Firmname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
        req.body.is_staff=false
        req.body.is_superadmin=false

       const data = await Firm.create(req.body)
       res.status(200).send({
         error:false,
         data
    })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Get Single Firm"
        */
            const data = await Firm.findOne({_id:req.params.id})
            res.status(200).send({
                error:false,
                data
           })
     
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Update Firm"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Firmname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        const data = await Firm.updateOne({_id:req.params.id},req.body,{runValidators:true})
           res.status(200).send({
             error:false,
             new: await Firm.findOne({_id:req.params.id})
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Firms"]
            #swagger.summary = "Delete Firm"
        */
        const data = await Firm.updateOne({_id:req.params.id})
        res.status(data.deleteCount ? 202 : 404).send({
              error: !data.deleteCount,
              data
         })
    },
}