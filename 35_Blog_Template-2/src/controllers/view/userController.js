"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// This Express.js module manages user authentication processes, handling user login and logout. It uses the Mongoose ORM to interact with a MongoDB database, checks user credentials during login, sets up sessions and cookies, and redirects users based on successful or unsuccessful login attempts. The code emphasizes security measures such as error handling and strict mode for a robust user authentication system.
// Catch async-errors and send to errorHandler:
require('express-async-errors')

const User = require('../../models/userModel')

// ------------------------------------------
// User 
// ------------------------------------------
module.exports.User = {

    login: async (req, res) => {

        if (req.method == 'POST') {

            const { email, password } = req.body

            if (email && password) {

                // const user = await User.findOne({ email: email, password: passwordEncrypt(password) })
                // No need passwordEncrypt, because using "set" in model:
                const user = await User.findOne({ email: email, password: password })
                if (user) {

                    // Set Session:
                    req.session = {
                        user: {
                            id: user.id,
                            email: user.email,
                            password: user.password
                        }
                    }
                    // Set Cookie:
                    if (req.body?.rememberMe) {
                        // Set Cookie maxAge:
                        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 Days
                    }

                    // res.status(200).send({
                    //     error: false,
                    //     result: user,
                    //     session: req.session
                    // })
                    res.redirect('/')

                } else {

                    res.errorStatusCode = 401
                    throw new Error('Login parameters are not true.')

                }

            } else {

                res.errorStatusCode = 401
                throw new Error('Email and Password are required.')

            }
        } else {

            res.render('loginForm')

        }
    },

    logout: async (req, res) => {
        // Set session to null:
        req.session = null
        // res.status(200).send({
        //     error: false,
        //     message: 'Logout OK'
        // })
        res.redirect('/')
    },
}

