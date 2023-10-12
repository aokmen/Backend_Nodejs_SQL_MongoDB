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