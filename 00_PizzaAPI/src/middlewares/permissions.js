'use strict'

module.exports = {
    isLogin:(req,res,next)=>{
        if(req.user){
            next()
        }else{
            res.errorStatusCode=403
            throw new Error('You must login')
        }
    },
    isAdmin:(req,res,next)=>{
        if(req.user && req.user.isAdmin){
            next()
        }else{
            res.errorStatusCode=403
            throw new Error('You must login as a admin ')
        }
    },
    isAdminOrLead:(req,res,next)=>{
        if(req.user.isAdmin && (req.user.isLead && userId == req.user.userId)){
            next()
        }else{
            res.errorStatusCode=403
            throw new Error('You must login as a admin or department lead')
        }
    },
    isAdminOrOwner:(req,res,next)=>{ // user kendi ise veya admin ise
        if(req.user.isAdmin && (id=req.user._id)){
            next()
        }else{
            res.errorStatusCode=403
            throw new Error('You must login as a admin or owner')
        }
            
    },
}