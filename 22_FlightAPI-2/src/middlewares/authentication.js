"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// $ npm i jsonwebtoken
// app.use(authentication):

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const auth = req.headers?.authorization || null
    const accessToken = auth ? auth.split(' ')[1] : null

    jwt.verify(accessToken, process.env.ACCESS_KEY, (err, userData) => req.user = userData)
      
    if(req.user)
        req.body.createdId= req.user._id
    // else {

    //     res.errorStatusCode = 401
    //     throw new Error('invalid key.')
    // }

    
    
    
    if(process.env.ENV_NAME=='dev') {
        console.log('**********'); 
        console.log(req.body);
    }
        
    
    next()
}