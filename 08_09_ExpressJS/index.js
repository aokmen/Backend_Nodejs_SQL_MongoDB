'use strict'

const express = require("express") // exp import etme
const app = express() // app server olusturma
require('dotenv').config() // .env import
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

/* -------------------------------- app.get() ------------------------------- */

// app.get('/',(req,res)=>{ 
    // res.send('welcome Express')
    // res.send({key:'value'})
//     res.send({message:'welcome Express'})
// })
/* -------------------------- post,put,delete,patch ------------------------- */

// app.post('/',(req,res)=>{ res.send({message:'post request'})})
// app.put('/',(req,res)=>{ res.send({message:'put request'})})
// app.delete('/',(req,res)=>{ res.send({message:'delete request'})})
// app.patch('/',(req,res)=>{ res.send({message:'patch request'})})

/* -------------------------------- app.all() ------------------------------- */

// app.all('/',(req,res)=>{ 
//     res.send({message:'all request'})
// })

/* ------------------------------- app.route() ------------------------------ */

// app.route('/')
// .get((req,res)=>{ res.send({message:'get request'})})
// .post((req,res)=>{ res.send({message:'post request'})})
// .put((req,res)=>{ res.send({message:'put request'})})
// .delete((req,res)=>{ res.send({message:'delete request'})})

app.route('/home') // /path = /path/
.get((req,res)=>{ res.send({message:'welcome to home'})})

app.route('/abc(x?)123').get((req,res)=>{ res.send({message:'welcome to home'})}) // abcx123 or abc123 
app.route('/abc(x+)123').get((req,res)=>{ res.send({message:'welcome to home'})}) // n time x
app.route('/abc(*)123').get((req,res)=>{ res.send({message:'welcome to home'})}) // (*) any characters
app.route('/abc\(*\)123').get((req,res)=>{ res.send({message:'welcome to home'})})

/* ---------------------------------- regex --------------------------------- */
app.route(/home$/).get((req,res)=>{ res.send({message:'welcome to home'})})
// app.route('/home/').get((req,res)=>res.send({message:'welcome to home' }))
// end with
// app.route(/home$/).get((req,res)=>res.send({message:'welcome to home' }))
// start with
// app.get(/^\/home/,(req,res)=>res.send({message:'welcome to home' }))


/* -------------------------- Catch URL parameters -------------------------- */

// app.get('/user/:userID(\\d+)/username/:userName',(req,res)=>res.send(  // (\\d+)  : id=number (\\w+)  user: string
//     {
//         userID : req.params.userID,
//         userName : req.params.userName,
//         url:{protocol:req.protocol,
//         params:req.params,
//         baseURL:req.baseUrl,
//         path:req.path,
//         query:req.query,
//         subdomain:req.subdomains},
//     }))

    /* ---------------------- some usefull response methods --------------------- */


app.get('/',(req,res)=>{ 
    // res.sendStatus(404)  >>> status kodu olusturma
    // res.status(404).send({message:'this is my message'}) // >>> 404 kodu ve  mesaj gönderme
    // res.json({message:'this is json message'}) >>> Json formatinda mesaj gönderme
    // res.download('./index.js') >>>  dosya indirme
    // res.download('./index.js','newFileName.txt') >>> yazdigimiz formatta dosya indirme
  
    // res.send({message:__dirname }) >>> dosyanin yolunu gösterne
    // res.sendFile(__dirname+'/index.js') >>> dosya icerigini gösterme
    // res.redirect(301,'https://www.google.com')
})




















app.listen(PORT,HOST, () => console.log(`server is running on http://${HOST}:${PORT}`))  // port dinleme
