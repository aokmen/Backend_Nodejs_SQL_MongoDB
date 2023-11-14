'use strict'

const router = require('express').Router()
const auth = require('../controllers/authController')

router.post('/login',auth.login)
router.post('/login',auth.refresh)
router.get('/login',auth.logout)


module.exports = router