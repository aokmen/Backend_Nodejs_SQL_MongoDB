'use strict'
const router = require('express').Router()

const Todo = require('./todoModel')

/* ---------------------------------- Read ---------------------------------- */

router.get('/',async (req,res)=>{
    const data = await Todo.findAll()  // or findAndCountAll
    console.log(data);

    res.send(
        {   result:data,
            message:"get method"
        }
    )
})
/* --------------------------------- Create --------------------------------- */

router.post('/api',async (req,res)=>{

    // const data = await Todo.create({
    //     title:'test 1',
    //     description : "test description",
    //     priority:2
    // })

    const data = await Todo.create(req.body)
       
    res.send(
        {   result:data,
            message:"post method"
        }
    )
})

module.exports=router