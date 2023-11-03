/*   BLOG ROUTES        */
'use strict'

const router=require('express').Router()

const {BlogPost,BlogCategory}=require('../controllers/blogController')

router.route('/category')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/category/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)


router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)

router.route('/category/:categoryId/posts')
     .get(BlogPost.read)
// router.get('/category/:categoryId/posts',BlogPost.read)

module.exports=router