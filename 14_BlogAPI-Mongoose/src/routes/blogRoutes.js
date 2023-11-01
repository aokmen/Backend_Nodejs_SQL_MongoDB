/* -------------------------------------------------------------------------- */
/*                                 Blog Routes                                */
/* -------------------------------------------------------------------------- */

'use strict'
const router = require ('express').Router()

const {BlogPost} = require('../controller/blogController')

router.route('/')
    .get(BlogPost.list)
    .post(BlogPost.create)

module.exports = router