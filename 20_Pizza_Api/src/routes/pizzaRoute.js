'use strict'

const router = require('express').Router()
const Pizza = require('../controllers/pizzaController')
const permissions=require('../middlewares/permissions')

router.route('/')
.get(Pizza.list)
.post(permissions.isAdmin,Pizza.create)

router.route('/:id')
.get(Pizza.read)
.put(permissions.isAdmin,Pizza.update)
.delete(permissions.isAdmin,Pizza.delete)

module.exports = router