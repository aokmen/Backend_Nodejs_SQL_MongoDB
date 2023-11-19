"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const passenger = require('../controllers/passenger')

// URL: /passengers

// router.route('/')
//     .get(passenger.list)
//     .post(passenger.create)

// router.route('/:id')
//     .get(passenger.read)
//     .put(passenger.update)
//     .patch(passenger.update)
//     .delete(passenger.delete)

// router.use(permissions.isStaff) >>> hepsine permissions.isStaff islem yapabilir anlaminda hepsine tek tek yazmaya gerek yok.
    router.route('/')
    .get(permissions.isStaff, passenger.list)
    .post(permissions.isStaff,passenger.create)

router.route('/:id')
    .get(permissions.isStaff, passenger.read)
    .put(permissions.isStaff, passenger.update)
    .patch(permissions.isStaff, passenger.update)
    .delete(permissions.isAdmin, passenger.delete)
/* ------------------------------------------------------- */
module.exports = router