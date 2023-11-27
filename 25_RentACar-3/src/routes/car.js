"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/car:

const { isAdmin } = require('../middlewares/permissions')
const car = require('../controllers/car')

//Uploading Files
// const multer = require('multer')
// const upload= multer({
//     storage: multer.diskStorage({
//         destination: './upload',
//         filename: function(req,file,returnCallback){
//             // returnCallBack(error,filename)
//             returnCallback(null,file.originalname)
//         }
//     })
// })

// URL: /cars
const upload = require('../middlewares/upload')

router.route('/')
    .get(car.list)
    .post(isAdmin, car.create)

router.route('/:id')
    .get(car.read)
  //.put(isAdmin, upload.single('image'), car.update) >> tek dosya yükleme
  //.put(isAdmin, upload.any('image'), car.update) >> fieldname ismi yazilmasina gerek yok >> Bu yöntem cok güvenli degil
    .put(isAdmin, upload.array('image'), car.update)  // birden cok dosya yükleme >> bu yöntem tavsiye ediliyor
    .patch(isAdmin, car.update)
    .delete(isAdmin, car.delete)

/* ------------------------------------------------------- */
module.exports = router