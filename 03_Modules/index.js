'use strict'

require('./module/module') 
// require('./module/') dosya adini yazmazsak default olarak index.js ye bakiyor


/* -------------------------------------------------------------------------- */
/*                          Bir fonksiyonu cagirirken                         */
/* -------------------------------------------------------------------------- */

// const test = require('./module/module') // Bir fonksiyonu cagirirken
// test()

// require('./module/module') // Tek bir fonksiyon varsa



/* -------------------------------------------------------------------------- */
/*             Birden fazla fonksiyonu array yöntemi ile cagirma              */
/* -------------------------------------------------------------------------- */

// const [test1,test2,test3] = require('./module/module') 

// test1()
// test2()
// test3()


/* -------------------------------------------------------------------------- */
/*              Birden fazla fonksiyonu obje yöntemi ile cagirma              */
/* -------------------------------------------------------------------------- */

const {testFunction:test1,testFunction2,testFunction3,x} = require('./module/module') 

test1()
testFunction2()
testFunction3()
console.log(x);
