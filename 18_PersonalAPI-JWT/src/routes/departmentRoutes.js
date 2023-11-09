'use strict'

const router = require('express').Router()

const Department = require('../controllers/departmentController')
const Permissions = require('../middlewares/permissions')

// router.get('/:id/personal',Permissions.isAdminOrLead,Department.Personal)

router.route('/')
.get(Permissions.isLogin, Department.list)
.post(Permissions.isAdmin, Department.create)

router.route('/:id')
.get(Permissions.isLogin,Department.read)
.put(Permissions.isAdminOrLead,Department.update)
.delete(Permissions.isAdmin,Department.delete)
module.exports = router