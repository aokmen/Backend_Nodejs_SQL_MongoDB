'use strict'

const router = require('express').Router()
const Topping = require('../controllers/toppingController')
const permissions=require('../middlewares/permissions')

router.route('/')
.get(permissions.isAdmin, Topping.list)
.post(permissions.isAdmin, Topping.create)

router.route('/:id')
.get(permissions.isAdmin, Topping.read)
.put(permissions.isAdmin, Topping.update)
.delete(permissions.isAdmin, Topping.delete)


// router.route('/')
// .get(Topping.list)
// .post(Topping.create)

// router.route('/:id')
// .get(Topping.read)
// .put(Topping.update)
// .delete(Topping.delete)

module.exports = router