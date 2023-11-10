//! -----   PersonnelAPI    -----
//? departmentRoute

'use strict'

const router=require('express').Router()

const department=require('../controllers/departmentController')
const permissions=require('../middlewares/permissions')

router.get('/:id/personnels',permissions.isAdminOrLead, department.personnels)

router.route('/')
    .get(permissions.isLogin, department.list)       //GET
    .post(permissions.isAdmin, department.create)    //POST

router.route('/:id')
    .get(permissions.isLogin,department.read)  
    .put(permissions.isAdminOrLead,department.update)     
    .delete(permissions.isAdmin,department.delete) 
    


module.exports=router