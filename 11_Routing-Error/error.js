'use strict'

const express=require('express')
const app=express()

require('dotenv').config()
const PORT=process.env.PORT || 8000

//? ----------------------------- Error Handling ----------------------------- */

/* -------------------------- step 1 generate error ------------------------- */

// app.get('/user/:id',(req,res)=>{
//     const {id} = req.params   //>> const id = req.params.id
//     if(isNaN(id)) {
//         throw new Error('Your ID not a number')  //,{cause:'you enter:'+id}

//     }
//     else res.send({message:"ok", id:id})
// })

/* ------------------- step 2 generate and catch error ------------------- */

app.get('/user/:id',(req,res,next)=>{  // 3 parametre = middleware
    try {
        const {id} = req.params   //>> const id = req.params.id
    if(isNaN(id)) {
        throw new Error('Your ID not a number',{cause:'you enter:'+id})  

    }
    else {res.send({message:"ok", id:id})}

    } catch (error) {
       // console.log(error);
      //  res.send({message:"ok", id:id, cause:cause})
      next(error)
    }
})

//? --------------------- error control in async function -------------------- */



 //? ---------------- errorHandler must be end of the codeblock --------------- */

const errorHandler = (err, req,res,next) => {// 4 parametre = errorHandler middleware
console.log('Error Handler runned');
const statusCode = res.statusCode ?? 500
// console.log(statusCode);
res.status(statusCode).send({message:err.message, cause:err.cause , stack:err.stack})

}

app.use(errorHandler)

app.listen(PORT,() => console.log('server running http://127.0.0.1:'+PORT))