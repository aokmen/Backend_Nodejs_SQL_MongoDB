'use strict'

/* -------------------------------------------------------------------------- */
/*                                  Examples                                  */
/* -------------------------------------------------------------------------- */

class Person{
        name='no name'
    constructor(name){
        this.name = name

    }
    sayName(){
        return this.name
    }
}
const person1 = new Person("Alex")
console.log(person1.name);

