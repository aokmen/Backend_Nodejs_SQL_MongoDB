"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const { isAdmin } = require('../middlewares/permissions')
const car = require('../controllers/car')

// URL: /cars

router.route('/')
    .get(car.list)
    .post(isAdmin, car.create)

router.route('/:id')
    .get(car.read)
    .put(isAdmin, car.update)
    .patch(isAdmin, car.update)
    .delete(isAdmin, car.delete)

/* ------------------------------------------------------- */
module.exports = router