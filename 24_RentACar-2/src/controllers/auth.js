"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Auth Controller:

const User = require('../models/user')
const Token = require('../models/user')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    login:async (req,res) =>{
         /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Login'
            #swagger.description = 'Login with username (or email) and password'
            _swagger.deprecated = true
            _swagger.ignore = true
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    username: 'test',
                    password: '1234'
                }
            }
        */
       const {username, email, password} = req.body
       if((username || email) && password) {

            const user = User.findOne({$or: [{username},{email}] })  // username:username >>> username, email:email >>> email  key ve value ayni ise bu sekilde olur.
            
            if(user &&  user.password == passwordEncrypt(password)){

                if(user.isActive){

                     /* TOKEN */

                    let tokenData = await Token.findOne({userId:user._id}) // daha önce bir token alan bir kullaniciyi buluyor

                    if (!tokenData) { // token alinmamis
                        let tokenKey = passwordEncrypt(user._id + Date.now())
                        tokenData = await Token.create({ userId: user._id, token: tokenKey })
                    }

                    res.send({
                        error: false,
                        token: tokenData.token,
                        user
                    })

                    /* TOKEN */

                } else {

                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
       } else{
            res.errorStatusCode = 401
            throw new Error('Please enter username/email and password')
       }
    }
},
    logout: async (req, res) => {
        /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Logout'
            #swagger.description = 'No need any doing for logout. You must deleted Bearer Token from your browser.'
        */
       const auth = req.headers?.authorization || null
       const tokenKey = auth ? auth.split(' ')[1] : null
       
       // Delete token from db:
       const tokenData = Token.deleteOne({token:tokenKey})
       res.send({
        error: false,
        message:'Logout was OK',
        data:tokenData
    })
    }

}