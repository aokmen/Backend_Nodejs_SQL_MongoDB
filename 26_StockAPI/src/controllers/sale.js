"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Sale Controller:
const Sale = require("../models/sale");
const Product = require("../models/product");
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
    const data = await res.getModelList(Sale);
    res.status(200).send(data);
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
    //req.body.user_id = req.user?._id;

    const currentProduct = await Product.findOne({ _id: req.body.product_id });

    if (currentProduct.stock >= req.body.quantity) {

      const data = await Sale.create(req.body);
      const updateProduct = await Product.updateOne({_id:data.product_id},{$inc : {stock:-data.quantity}}) 


    } else {
      res.errorStatusCode = 422;
      throw new Error("not enough stock", { cause: { currentProduct } });
    }

    const data = await Sale.create(req.body);

    res.status(200).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Get Single Sale"
        */
    const data = await Sale.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
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
    if(req.body?.quantity){

         const currentSale = await Sale.findOne({_id:req.params.id})
         const quantity = req.body.quantity-currentSale.quantity
         
         const updateProduct = await Product.updateOne({_id:currentSale.product_id},{$inc : {stock:-quantity}})
    }
    const data = await Sale.updateOne({_id:req.params.id},req.body,{runValidators:true})

    res.status(200).send({
      error: false,
      new: await Sale.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Sale"]
            #swagger.summary = "Delete Sale"
        */
    const currentSale = await Sale.findOne({ _id: req.params.id });

    const data = await Sale.deleteOne({_id:req.params.id})

    const updateProduct = await Product.updateOne({_id:currentSale.product_id},{$inc : {stock: currentSale.quantity}})

    res.status(data.deletedCount ? 202 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
