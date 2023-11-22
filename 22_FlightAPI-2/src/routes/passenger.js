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
// router.user(permissions.isStaff)

router.route('/')
    .get(permissions.isStaff, passenger.list)
    .post(permissions.isStaff, passenger.create)

router.route('/:id')
    .get( permissions.isStaff, passenger.read)
    .put( permissions.isStaff, passenger.update)
    .patch(permissions.isStaff, passenger.update)
    .delete(permissions.isAdmin, passenger.delete)

/* ------------------------------------------------------- */
module.exports = router