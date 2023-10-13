'use strict'
require("dotenv").config()
/* -------------------------------------------------------------------------- */
/*                            http modülünü cagirma                           */
/* -------------------------------------------------------------------------- */

const http = require('node:http') 
const PORT = process.env.PORT
const HOST = process.env.HOST
/* -------------------------------------------------------------------------- */
/*                          server ve port  olusturma                         */
/* -------------------------------------------------------------------------- */

// http.createServer((request,response) => {
    
// })

// const app = http.createServer((request,response) => {
    
// })
// app.listen(8000,() => {
//     console.log("server calisti");
// })


// const app = http.createServer((request,response) => {
//      response.end('welcome to nodejs server') // burasi olmazsa sonsuz döngü olur, cevap sonlanmaz
// }).listen(8000,() => {
//     console.log("server calisti http://127.0.0.1:8000");
// })


// const app = http.createServer((req,res) => {
     // console.log(res);
//     if(req.url=='/'){
//         res.end('welcome to Home Page server') 
//     }else if(req.url=='/pro'){
//         res.end('welcome to pro server') 
//     }
//     else{
//         res.end('welcome to nodejs server') 
//     }
    
// }).listen(8000,() => console.log("server calisti http://127.0.0.1:8000"))

const app = http.createServer((req,res) => {
    // console.log(res);
    if(req.url=='/'){
        // res.write('message')
        // res.end() 
        if(req.method=='GET') {
            // res.statusCode=404
            // res.statusMessage='this is status message'
            //  res.writeHead(404,'this is status message')
            //  res.writeHead(404,'this is status message')
            // res.end('Get request recived')
            const obj = {
                id:1,
                message:"ok"
            }
            res.end(JSON.stringify(obj))
        }
       
        else res.end('you cant this request') 

    }else if(req.url=='/pro'){
        res.end('welcome to pro server') 
    }
    else{
        res.end('welcome to nodejs server') 
    }
    
}).listen(PORT,() => console.log(`server calisti ${HOST}:${PORT}`))