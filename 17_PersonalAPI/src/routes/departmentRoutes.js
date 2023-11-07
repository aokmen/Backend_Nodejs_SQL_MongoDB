'use strict'

const router = require('express').Router()

const Department = require('../controllers/departmentController')

router.route('/')
.get(Department.list)
.post(Department.create)

router.route('/:id')
.get(Department.read)
.put(Department.update)
.delete(Department.delete)
module.exports = router