"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { BlogPost } = require('../../controllers/view/blogController')
const { User } = require('../../controllers/view/userController')

// ------------------------------------------
// BlogPost
// ------------------------------------------

router.all('/', (req, res) => {
    res.redirect('/post')
})

router.all('/post', BlogPost.list)
router.all('/post/create', BlogPost.create)
router.all('/post/:postId', BlogPost.read)
router.all('/post/:postId/update', BlogPost.update)
router.all('/post/:postId/delete', BlogPost.delete)

// ------------------------------------------
// User
// ------------------------------------------

// Login/logout:
router.all('/login', User.login)
router.all('/logout', User.logout)

module.exports = router