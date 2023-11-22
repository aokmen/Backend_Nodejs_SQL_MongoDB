"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// auth:
router.use('/auth',require('./auth'))
// user:
router.use('/users', require('./user'))
// flight:
router.use('/flights', require('./flight'))
// passenger:
router.use('/passengers', require('./passenger'))
// reservation:
router.use('/reservations', require('./reservation'))
// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router