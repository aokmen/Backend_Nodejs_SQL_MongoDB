//! -----   PersonnelAPI    -----
//? personnelRoute

'use strict'

const router=require('express').Router()

const personnel=require('../controllers/personnelController')

// router.post('/login', personnel.login)      
// router.all('/logout', personnel.logout) 
    
const permissions=require('../middlewares/permissions')

router.route('/')
    .get(permissions.isAdmin, personnel.list)      
    .post(permissions.isAdmin,personnel.create)    

router.route('/:id')
    .get(permissions.isAdminOrOwner, personnel.read)  
    .put(permissions.isAdminOrOwner, personnel.update)     
    .delete(permissions.isAdmin, personnel.delete)     

module.exports=router