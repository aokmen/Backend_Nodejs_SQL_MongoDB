/* ------------------------------- Permissions ------------------------------ */

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
        console.log(req.user.isAdmin);
        if(req.user && req.user.isAdmin){
            next()
        }else{
            res.errorStatusCode=403
            throw new Error('You must login as a admin')
        }
    },
     isAdminOrLead:(req,res,next)=>{ // user kendi departmaninin lideri ise veya admin ise
        if(req.user.isAdmin && (req.user.isLead && departmentId == req.user.departmentId)){
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