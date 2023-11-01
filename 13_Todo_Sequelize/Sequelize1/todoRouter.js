'use strict'

/* ------------------------------- TODO Router ------------------------------ */

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
       
    res.status(201.).send(

        {   result:data,
            message:"post method"
        }
    )
})

// Read by id

router.get('/api/:id',async (req,res)=>{
    // const id=req.params.id
    const data = await Todo.findByPk(req.params.id) // find with primary key
    //   const data = await Todo.findAll({where:{priority:2}}) 
    console.log(data);

    res.send(
        {   result:data,
            message:"get with id"
        }
    )
})
// upddate
router.put('/api/:id',async (req,res)=>{

    const isUpdated = await Todo.update(req.body, {where:{id:req.params.id}}) // find with primary key
    if(isUpdated) {
    res.status(202).send(
        {   // result:isUpdated,
            body: req.body,
            after:  await Todo.findByPk(req.params.id), //update olan id nin son halini getir
            message:"data updated"
        }
    )} else {
        res.status(400).send(
            {   result:isUpdated,
                message:"data not found"
            }
        )
    }
})

// delete = destroy
router.delete('/api/:id',async (req,res)=>{

    const isDeleted = await Todo.destroy({where:{id:req.params.id}}) // find with primary key

    res.status(202).send(
        {   result:isDeleted,
            message:"get with id"
        }
    )
})

module.exports=router