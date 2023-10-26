const router = require('express').Router()

// router.get('/',(req,res)=>{res.send({ message:'All User' })})
// router.get('/login',(req,res)=>{res.send({ message:'Login Page' })})
// router.get('/logout',(req,res)=>{res.send({ message:'logout Page' })})
// router.get('/:userId',(req,res)=>{res.send({ message:'UserId Page' })})
// router.get('/user/:userID/password',(req,res)=>{res.send({ message:'Password Page' })})

// router.get('/register',(req,res)=>{res.send({ message:'Get Page' })})
// router.put('/register',(req,res)=>{res.send({ message:'Put Page' })})
// router.post('/register',(req,res)=>{res.send({ message:'Post Page' })})
// router.delete('/register',(req,res)=>{res.send({ message:'Delete Page' })})

const userControl = (req,res,next)=>{
    const {userName} = req.query // userControl fonksiyonu içindeki req.query ifadesi, sadece sorgu parametrelerini değil, tüm isteği (request) alır. Bu nedenle kullanmak istediğiniz sorgu parametresini belirtmelisiniz. Örneğin, eğer kullanıcı adı parametresini almak istiyorsanız, req.query.username veya {userName}  gibi destructer kullanabilirsiniz.
    
    if(userName == "de") next()
    else res.send({ message:'wrong username' })
    
}
router.use(userControl)

router.route('/register')
.get((req,res)=>{res.send({ message:'Get Page' })})
.put((req,res)=>{res.send({ message:'Put Page' })})
.post((req,res)=>{res.send({ message:'Post Page' })})
.delete((req,res)=>{res.send({ message:'Delete Page' })})

module.exports = router