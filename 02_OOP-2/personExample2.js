'use strict'
class Person{
    name='no name'
    constructor(name){
        this.name=name
    }
    sayName(){
        return this.name
    }
}
const person1=new Person('Abdullah')
console.log(person1.sayName()); 
const pertson2=new Person('Seyma')
console.log(pertson2.sayName());
