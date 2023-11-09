'use strict'

const router = require('express').Router()

const Personal = require('../controllers/personalController')
const Permissions = require('../middlewares/permissions')

// router.post('/login',Personal.login)
// router.all('/logout',Personal.logout)


router.route('/')
.get(Permissions.isAdmin,Personal.list)
.post(Permissions.isAdmin,Personal.create)

router.route('/:id')
.get(Permissions.isAdminOrOwner,Personal.read)
.put(Permissions.isAdminOrOwner,Personal.update)
.delete(Permissions.isAdmin,Personal.delete)
module.exports = router