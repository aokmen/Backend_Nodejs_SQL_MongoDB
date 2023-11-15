/*  password ENCRYPTE */
'use strict'

const crypto=require('node:crypto')

const keyCode=process.env.SECRETKEY || 'write random charaters'
const loopCount=10000
const charCount=32  // 32 means 64, 64 means 128 
const encType='sha512'

module.exports=function(password){
    const encode=crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType)
    // return buffer datatype
    return encode.toString('hex')

}


