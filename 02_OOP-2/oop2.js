'use strict'

/* -------------------------------------------------------------------------- */
/*                              class expression                              */
/* -------------------------------------------------------------------------- */

//? const Classname = class { property }

/* -------------------------------------------------------------------------- */
/*                              class declaration                             */
/* -------------------------------------------------------------------------- */

class ClassName{ //pascal case ilk harfi büyük tavsiye edilir
    //properties
    //function()
    name='clarusway'
    function(){
        return this.name
    }
}
const newObj = new ClassName() // instance created

console.log(newObj.function());

/* -------------------------------------------------------------------------- */
/*                                   Samples                                  */
/* -------------------------------------------------------------------------- */

class Vehicle{
    // brand = 'marka'
    // model = 'model'
    // year = 1990
    // used = false
    // engineIsRunning = false
    // constructor(param1,param2,param3="default value"){}
    constructor(brand,model,year=1990){
        this.brand = brand
        this.model = model
        this.year = year
        this.used = false
        this.engineIsRunning = false
    }
    runEngine(){
        this.engineIsRunning=true
    }
}
const vehicle1 = new Vehicle
console.log(vehicle1);
vehicle1.brand='tesla'
console.log(vehicle1);
const vehicle2=new Vehicle("toyota","corolla",2021)
console.log(vehicle2);

/* -------------------------------------------------------------------------- */
/*                          Inheritance (Miras Alma)                          */
/* -------------------------------------------------------------------------- */


class Car extends Vehicle {
    sunroof = true
    // constructor(brand,model,year){
    //     super()
    // }
}

const car1 = new Car()
console.log(car1);
console.log(car1.sunroof);
console.log(car1.used);
car1.brand='ford'
console.log(car1.brand);
const car2 = new Car('nissan','micra',2020)
console.log(car2);

/* ----------------------------------- ... ---------------------------------- */
class Enemy {
    constructor(power) {
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

class Alien extends Enemy {
    constructor(name,phrase,power){
        super(power)
        this.name=name
        this.phrase=phrase
        this.species="alien"

    }
    fly = () => console.log("Hi");
    sayPhrase = () => console.log(this.phrase);
}
const alien1 = new Alien("Ali","Hello",10)

console.log(alien1);
console.log(alien1.attack(10));

/* -------------------------------------------------------------------------- */
/*                                Encapsulation                               */
/* -------------------------------------------------------------------------- */


// Here's our class
class Alien2 extends Alien {
     #birthYear // We first need to declare the private property, always using the '#' symbol as the start of its name.

    constructor (name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.speed = speed
        this.#birthYear = birthYear // Then we assign its value within the constructor function
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // and use it in the corresponding method.
}
    
// We instantiate the same way we always do
const alien2 = new Alien2("Ali", "I'm Ali the alien!", 10, 50, 10000)

console.log(alien2);
alien2.howOld()

