'use strict'

const router = require('express').Router()
const Order = require('../controllers/orderController')
const permissions=require('../middlewares/permissions')

router.route('/')
.get(permissions.isAdmin,Order.list)
.post(permissions.isLogin,Order.create)

router.route('/:id')
.get(permissions.isLogin,Order.read)
.put(permissions.isLogin,Order.update)
.delete(permissions.isAdmin,Order.delete)

module.exports = router