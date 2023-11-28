"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */

const SaleSchema = new mongoose.Schema({

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required: true
      },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true
      },

    quantity: {
        type: Number,
        default:0
      },
    price: {
        type: Number,
        default:0
      },
    price_total: {
        type: Number,
        default:0,
        // set: function(){return this.price * this.quantity}
        default: function(){return this.price * this.quantity}, // for Create
        transform: function(){return this.price * this.quantity} // for Update
      },
    
    
    
  },{
    collection: 'Sale',
    timestamps: true
  })
  
 
  SaleSchema.pre(['init'], function (data) {

   data.id = data._id
   data.createds = data.createdAt.toLocaleDateString('tr-tr')

})


  module.exports=mongoose.model('Sale', SaleSchema)