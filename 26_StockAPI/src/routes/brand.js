"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const brand = require('../controllers/brand')

router.route('/')
    .get(brand.list) 
    .post(brand.create)

router.route('/:id')
    .get(brand.read) 
    .put(brand.update)
    .patch(brand.update)
    .delete(brand.delete)

module.exports=router