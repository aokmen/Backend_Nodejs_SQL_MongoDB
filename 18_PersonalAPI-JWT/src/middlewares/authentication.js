/* -------------------------------------------------------------------------- */
/*                               Authentication                               */
/* -------------------------------------------------------------------------- */

'use strict'

const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
   
    const auth = req.headers?.authorization || null

    // req.isLogin = false
    const accessToken=auth?.split('')[1]
    // console.log(accessToken);
    jwt.verify(accessToken,process.env.ACCESS_KEY,function(err,user){
        if(err){
            console.log('jwt accesskey NO ')

        }else{
            req.isLogin = true
            req.user =user
            console.log('jwt accesskey YES ')

        }

    })
    next()
}
