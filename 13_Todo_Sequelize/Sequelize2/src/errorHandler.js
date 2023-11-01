'use strict'

/*      TODO error Handler  */

// const errorHandler=(err,req,res,next)=>{

module.exports=(err,req,res,next)=>{

    const errorStatusCode=res.errorStatusCode ?? 500
    res.status(errorStatusCode).send({
        error:true,
        message:err.message,
        cause: err.cause

    })
}

// module.exports(errorHandler)
