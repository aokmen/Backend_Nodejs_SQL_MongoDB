'use strict'

const router = require('express').Router()

const User = require('../controllers/userController')
const Permissions = require('../middlewares/permissions')

router.route('/')
.get(Permissions.isLogin,User.list)
.post(Permissions.isAdmin,User.create)

router.route('/:id')
.get(Permissions.isAdminOrOwner,User.read)
.put(Permissions.isAdminOrOwner,User.update)
.delete(Permissions.isAdmin,User.delete)

// router.route('/')
// .get(User.list)
// .post(User.create)

// router.route('/:id')
// .get(User.read)
// .put(User.update)
// .delete(User.delete)


module.exports = router