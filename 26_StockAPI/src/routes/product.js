"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const product = require('../controllers/product')

router.route('/')
    .get(product.list) 
    .post(product.create)

router.route('/:id')
    .get(product.read) 
    .put(product.update)
    .patch(product.update)
    .delete(product.delete)

module.exports=router