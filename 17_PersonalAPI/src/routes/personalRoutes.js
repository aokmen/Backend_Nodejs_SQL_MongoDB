'use strict'

const router = require('express').Router()

const Personal = require('../controllers/personalController')

router.post('/login',Personal.login)
router.all('/logout',Personal.logout)


router.route('/')
.get(Personal.list)
.post(Personal.create)

router.route('/:id')
.get(Personal.read)
.put(Personal.update)
.delete(Personal.delete)
module.exports = router