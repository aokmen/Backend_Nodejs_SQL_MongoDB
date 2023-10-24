'use strict'

const myFunction1 = (req,res,next) => {

    console.log('function1');
    req.customData = 'added by first function middleware'
    next()
}

const myFunction2 = (req,res,next) => {
    
    console.log('function2');
    req.customData2 = 'added by first function middleware'
    next()
}

module.exports = [myFunction1,myFunction2]