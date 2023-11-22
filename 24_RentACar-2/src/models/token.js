"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
  "userId": "65343222b67e9681f937f001",
  "token": "...tokenKey..."
}
/* ------------------------------------------------------- */
// Token Model:

const TokenSchema = new mongoose.Schema({

  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true, // Token'larda userId sürekli kontrol ediliyor. Buyüzden mongoose userId i RAM de sakliyor ve hizli erisim sagliyor. Arama hizlandirma islemi
  },

  token: {
      type: String,
      trim: true,
      required: true,
      index: true,
  },

}, { collection: 'tokens', timestamps: true })
module.exports = mongoose.model('Token', TokenSchema)