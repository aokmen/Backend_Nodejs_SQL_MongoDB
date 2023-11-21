"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const flight = require('../controllers/flight')

// URL: /flights

// router.route('/')
//     .get(flight.list)
//     .post(flight.create)

// router.route('/:id')
//     .get(flight.read)
//     .put(flight.update)
//     .patch(flight.update)
//     .delete(flight.delete)

    router.route('/')
    .get(flight.list)
    .post(permissions.isAdmin, flight.create)

router.route('/:id')
    .get(permissions.isAdmin, flight.read)
    .put(permissions.isAdmin, flight.update)
    .patch(permissions.isAdmin, flight.update)
    .delete(permissions.isAdmin, flight.delete)
/* ------------------------------------------------------- */
module.exports = router