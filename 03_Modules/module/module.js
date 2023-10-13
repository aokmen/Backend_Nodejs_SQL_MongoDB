// console.log('here is module file');

// const testFunction = function(){
//     console.log('test fonksiyonu calisti');
// }
// const testFunction2 = function(){
//     console.log('test fonksiyonu2 calisti');
// }
// const testFunction3 = function(){
//     console.log('test fonksiyonu3 calisti');
// }
 /* -------------------------------------------------------------------------- */
 /*                             array olarak export                            */
 /* -------------------------------------------------------------------------- */

//  module.exports = [testFunction,testFunction2,testFunction3]


 /* -------------------------------------------------------------------------- */
 /*                             obje olarak export                             */
 /* -------------------------------------------------------------------------- */

//  module.exports = {testFunction,testFunction2,testFunction3}

// module.exports.x=10

/* -------------------------------------------------------------------------- */
/*                              shorthand yöntemi                             */
/* -------------------------------------------------------------------------- */

module.exports = {
     testFunction : function(){
        console.log('test fonksiyonu calisti');
    },
     testFunction2 : function(){
        console.log('test fonksiyonu2 calisti');
    },
     testFunction3 : function(){
        console.log('test fonksiyonu3 calisti');
    },
    x:10
}