'use strict'

const exp = require('express')
const app = exp()
require('dotenv').config()
const PORT = process.env.PORT

// app.get('/',(req,res,next)=>{
//     console.log('first middleware');
//     req.customData = 'added by first middleware'
    
//     next()
    // console.log('second middleware');
    // res.send({
    //     message:"welcome first middleware"
    // })
// })
// app.get('/',(req,res,next)=>{
//     console.log('second middleware');
//     req.customData2 = 'added 2 by first middleware'
//     next()
    // console.log('second middleware');
    // res.send({
    //     message:"welcome first middleware"
    // })
// })

// app.get('/',(req,res)=>{
//     res.send({
//         myDatas:{
//         myData1:req.customData,
//         myData2:req.customData2},
//         message:"get request"
//     })
// })

/* -------------------------------------------------------------------------- */
/*                            middleware functions                            */
/* -------------------------------------------------------------------------- */

// const myFunction1 = (req,res,next) => {
//     const x=req.query.x 
//     console.log(x);
//     console.log('function1');
//     req.customData = 'added by first function middleware'
//     if(x==1)  next()
//     else if (x==2) next('route')
   
// }

// const myFunction2 = (req,res,next) => {
//     console.log('function2');
//     req.customData2 = 'added by first function middleware'
//     next()
// }

// app.get('/',myFunction1,myFunction2,(req,res)=>{
//     console.log('getfunction');
//     res.send({
//         myDatas:{
//         myData1:req.customData,
//         myData2:req.customData2
//        },
//         message:"get middleware request"
//     })
// })

// app.get('/',(req,res)=>{
//     console.log('getfunction');
//     res.send({
//         myDatas:{
//         myData1:req.customData,
//         myData2:req.customData2
//        },
//         message:"get route request"
//     })
// })

/* -------------------------------------------------------------------------- */
/*                          using middleware with use                         */
/* -------------------------------------------------------------------------- */

const myFunction1 = (req,res,next) => {

    console.log('function1');
    req.customData = 'added by first function middleware'
    next()
   
}

const myFunction2 = (req,res,next) => {
    console.log('function2');
    req.customData2 = 'added by first function middleware'
    next()
}

// app.use(myFunction1,myFunction2) // default all paths
app.use('/home',myFunction1,myFunction2) // default all paths

app.get('/home',(req,res)=>{
    console.log('get function');
    res.send({
        myDatas:{
        myData1:req.customData,
        myData2:req.customData2
       },
        message:"get request answered"
    })
})











app.listen(PORT,() => console.log('server running on http://127.0.0.1:'+PORT))