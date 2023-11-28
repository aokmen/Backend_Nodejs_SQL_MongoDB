"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Purchase Controller:
const Purchase = require('../models/purchase')
const Product = require('../models/product')
module.exports = {
    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchase"]
            #swagger.summary = "List Purchase"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Purchase,{},['firm_id','brand_id','product_id'])
       res.status(200).send(data)
        // error:false,
        // detail: await res.getModelListDetails(Purchase),

    },
    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchase"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Purchasename": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
        // req.body.is_staff=false
        // req.body.is_superadmin=false
       
       req.body.user_id = req.user?._id  // login olan kullanicinin id sini alarak, baskasinin id sini yazamaz
       const data = await Purchase.create(req.body)
       const updateProduct = await Product.updateOne({_id:data.product_id},{$inc : {stock:data.quantity}})
       res.status(200).send({
         error:false,
         data
    })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchase"]
            #swagger.summary = "Get Single Purchase"
        */
            const data = await Purchase.findOne({_id:req.params.id})
            res.status(200).send({
                error:false,
                data
           })
     
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchase"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "Purchasename": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */
        // son alimdaki deger
        const currentPurchase = await Purchase.findOne({_id:req.params.id})

        // son alimdaki degerlerin yeni hali
        const data = await Purchase.updateOne({_id:req.params.id},req.body,{runValidators:true})
        
        // const quantity = req.body.quantity-currentPurchase.quantity
        // product daki stok miktarinin degisen alim miktarina göre güncellenmesi
        const updateProduct = await Product.updateOne({_id:currentPurchase.product_id},{$inc : {stock:data.quantity}})
           res.status(200).send({
             error:false,
             new: await Purchase.findOne({_id:req.params.id})
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchase"]
            #swagger.summary = "Delete Purchase"
        */
        const currentPurchase = await Purchase.findOne({_id:req.params.id})

        const data = await Purchase.updateOne({_id:req.params.id})

        const updateProduct = await Product.updateOne({_id:currentPurchase.product_id},{$inc : {stock: -currentPurchase.quantity}})

        res.status(data.deleteCount ? 202 : 404).send({
              error: !data.deleteCount,
              data
         })
    },
}