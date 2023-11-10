'use strict'

const router = require('express').Router()

const auth = require('../controllers/authController')

router.post('/login',auth.login)
router.post('/refresh',auth.refresh)
router.all('/logout',auth.logout)



module.exports = router