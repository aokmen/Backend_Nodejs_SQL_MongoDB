"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Sale Controller:
const Sale = require('../models/sale')
module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "List Sale"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Sale)
       res.status(200).send(data)
        // error:false,
        // detail: await res.getModelListDetails(Sale),

    },
    create: async (req, res) => {
        /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Salename": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
        req.body.is_staff=false
        req.body.is_superadmin=false

       const data = await Sale.create(req.body)
       res.status(200).send({
         error:false,
         data
    })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Get Single Sale"
        */
            const data = await Sale.findOne({_id:req.params.id})
            res.status(200).send({
                error:false,
                data
           })
     
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Salename": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        const data = await Sale.updateOne({_id:req.params.id},req.body,{runValidators:true})
           res.status(200).send({
             error:false,
             new: await Sale.findOne({_id:req.params.id})
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Delete Sale"
        */
        const data = await Sale.updateOne({_id:req.params.id})
        res.status(data.deleteCount ? 202 : 404).send({
              error: !data.deleteCount,
              data
         })
    },
}