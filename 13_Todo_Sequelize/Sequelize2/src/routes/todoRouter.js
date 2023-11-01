'use strict'

/*  TODO Router     */    

const router=require('express').Router()

const Todo=require('../models/todoModel')

const todo=require('../controllers/todoController')

// router.get('/api',todo.list)
router.route('/api')
    .get(todo.list)
    .post(todo.post)

router.route('/api/:id')
    .get(todo.list)
    .put(todo.list)
    .delete(todo.post)
    

module.exports=router
