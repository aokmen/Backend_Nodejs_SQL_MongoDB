"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /
//car
router.use('/cars', require('./car'))
// reservation
router.use('/reservations', require('./reservation'))

// document:
router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router