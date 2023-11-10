//! -----   PersonnelAPI    ----- 
//? index.js

'use strict'

// Create Server
const express=require('express')
const app=express()


//  env Variables
require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

//  MODULES

//  errorHandler
require('express-async-errors')

//  DB conneciton
const {dbConneciton}=require('./src/configs/dbConnection')
dbConneciton()

//  MIDDLEWARES
app.use(express.json()) // app.use('/',express.json())  

// LOG
const morgan =require('morgan')
// console.log(morgan);


const fs = require('node:fs')
const now = new Date()
const today = now.toISOString().split('T')[0]
app.use(morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
}))


//  SESSION & COOKIES
// app.use(require('cookie-session')({secret:process.env.SECRETKEY}))

// check every request for personnel session exist or not
/*
app.use( async (req,res,next) =>{

    const Personnels=require('./src/models/personnelModel')
    
    req.isLogin=false

    if(req.session?.id){

        const user=await Personnels.findOne({ _id:req.session.id })
        // if(user && user.password==req.session.password)
        //     req.isLogin=true
        
        req.isLogin = user && user.password == req.session.password

    }
    next()

})
*/
//const jwt=require('jsonwebtoken')

// app.use( async (req,res,next) =>{

//     const auth=req.headers?.authorization || null    

//     const accsessToken=auth?.split(' ')[1] 
//     req.isLogin=false

//     // console.log(accsessToken);
//     jwt.verify(accsessToken,process.env.ACCESS_KEY,function(err,user){
//         if(err){
//             console.log('jwt accesskey NO ')

//         }else{
//             req.isLogin=true
//             req.user=user
//             console.log('jwt accesskey YES ')

//         }

//     })
//     // req.isLogin=false

//     next()

// })

app.use(require('./src/middlewares/authentication'))

//  res.getModelList(): 
app.use(require('./src/middlewares/findSearchSortPage' ))


//  ROUTES

// Home
app.all('/',(req,res)=>{
    res.send(
        {
            error:false,
            message:'PERSONNEL API PROJECT HOME SITE',
            isLogin:req.isLogin,
            // session:req.session
        }
    )

})
app.use('/auth', require('./src/routes/authRoute'))
app.use('/departments', require('./src/routes/departmentRoute'))
app.use('/personnels', require('./src/routes/personnelRoute'))

// swagger-ui-express
const swaggerUI=require('swagger-ui-express')
const swaggerJson=require('./swagger.json')

app.use('/docs/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJson, { swaggerOptions: { persistAuthorization: true } }))

// redoc-express
const redoc = require('redoc-express')
app.use('/docs/json', (req, res) => {
    res.sendFile('swagger.json', { root: '.' })
})
app.use('/docs/redoc', redoc({
    specUrl: '/docs/json',

}))


// generate Data
// require('./src/helpers/sync')()

// errorHandler
app.use(require('./src/middlewares/errorHandler'))


// listen port via app 
app.listen(PORT,console.log('SERVER IS RUNNING on http://'+HOST+":"+PORT))


