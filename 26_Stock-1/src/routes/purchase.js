"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const purchase = require('../controllers/purchase')

router.route('/')
    .get(purchase.list) 
    .post(purchase.create)

router.route('/:id')
    .get(purchase.read) 
    .put(purchase.update)
    .patch(purchase.update)
    .delete(purchase.delete)

module.exports=router