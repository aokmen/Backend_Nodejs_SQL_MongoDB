'use strict'

const exp = require('express')
const app = exp()
require('dotenv').config()
const PORT = process.env.PORT


const [myFunction1,myFunction2] = require('./middleware/middleware.js')


// app.use(myFunction1,myFunction2) // default all paths

app.use('/home',require('./middleware/middleware.js'))
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