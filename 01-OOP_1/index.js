'use strict'
console.log('hello');
const draftObject = {
    // variable1 : "value"
    // property = field = attribute
    propertyName:'property value',
    // fonksiyon objenin icinde ise metod ismi kullanilir
    methodName:function(){
        return 'value'
    }
}
// console.log(draftObject.propertyName);
// console.log(draftObject.methodName());

// const Car = {
//     brand:'BMW',
//     model: 'Combi',
//     year: 2023,
//     color: ['black','white'],
//     details:{
//         door:5,
//         isAutogear:true
//     },
//     engine:function(){
//         return 'engine status'
//     }
// }

// console.log(Car.brand);
// console.log(Car.model);
// console.log(Car.year);
// console.log(Car.color);
// console.log(Car.details);
// console.log(Car.details.door);
// console.log(Car.engine());

// console.log(Car["brand"]);
// console.log(Car["color"]);
// console.log(Car["details"]["door"]);
// console.log(Car.details["door"]);
// console.log(Car["engine"]());



/* -------------------------------------------------------------------------- */
/*                                    Array                                   */
/* -------------------------------------------------------------------------- */
const sampleArray =["v1","v2","v3","v4"]
const [x,y] = sampleArray
console.log(x,y);
const newArray = [...sampleArray,"v5","v6"]
console.log(newArray);

/* -------------------------------------------------------------------------- */
/*                                   Object                                   */
/* -------------------------------------------------------------------------- */

const Car = {
    brand:'BMW',
    model: 'Combi',
    year: 2023,
    color: ['black','white'],
    details:{
        door:5,
        isAutogear:true
    },
    engine:function(){
        return this.model
    },

    //TODO obje icinde arrow fonksiyon calismaz
    // arrowFunc: () => {
    //     return this.model
    // }
}
// console.log(Car.engine());

/* -------------------------------------------------------------------------- */
/*                                rest operator                               */
/* -------------------------------------------------------------------------- */
const {brand,model,year,...Other} = Car

console.log(Other);

const {brand:newBrand,model:newModel,year:newYear,...newOther} = Car
console.log(newBrand);

/* -------------------------------------------------------------------------- */
/*                               spread operator                              */
/* -------------------------------------------------------------------------- */
const newCar = {
    ...Car,
    ...Car.color,
    newKey:"value"
}
console.log(newCar);

 /* -------------------------------------------------------------------------- */
 /*                               object to json                               */
 /* -------------------------------------------------------------------------- */

const jsonVar = JSON.stringify(Car)
console.log(jsonVar);

const newCarFromJson = JSON.parse(jsonVar)
console.log(newCarFromJson);


/* -------------------------------------------------------------------------- */
/*                               object to array                              */
/* -------------------------------------------------------------------------- */

// const newArrayObj = Car
// const newArrayObj = [{...Car}]
// console.log(newArrayObj);

const newArrayObj1 = Object.entries(Car)
console.log(newArrayObj1);
const newArrayObj2 = Object.values(Car)
console.log(newArrayObj2);

/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */

const PascalCaseName = function(){
    this.property = value
}

const CarConstructor = function(brand,model,year){
    this.brand = brand
    this.model = model
    this.year = year
    this.engine = false
    this.startEngine = function(){
        this.engine=true
        return("motor calisti")
    }
}
const newCar2 = new CarConstructor("opel","corsa",2020)
newCar2.startEngine()
console.log(newCar2);
// console.log(CarConstructor("opel","corsa","2020"));

console.log(newCar2.startEngine());

/* -------------------------------------------------------------------------- */
/*                          GETTERS and SETTERS                               */
/* -------------------------------------------------------------------------- */


class Car1 {
    constructor(id,name){
        console.log("Inside Car constructor");
        this.id=id; 
        this.name=name;
        this._place=null;
    }
        get place(){
            console.log("Inside getter function to getvalue");
            return this._place+ " GETTER FUNCTION";
        }
        set place(value){
            console.log("Inside  setter function to set value");
            this._place=value;
        }
}
car1.place="Newyork"
console.log("car1: "+ car1.id,car1.name, car1.place)

### Refer File: src/inheitanceSinglefile.js 
### INHERITANCE
"extend" keyword is used to show a class is inherits from a parent class. All class in javascript inherits from "Object Class"


<!--  Parent Class -->
class Vehicle{ 
}
 <!-- Truck and Bus Inherits from the Parent class called Vehicle -->
class Truck extends Vehicle{
}
class Bus extends Vehicle{
}
<!--  Create an instance of the Truck class -->
let truck1=new Truck();
<!-- Every class in javascript inherits from Object class (kind of super parent class) -->
 <!-- An instance (i.e. truck1) of a class(i.e. Truck) will also be an  instance of parent class(i.e. Vehicle) that it inherits from as well as an instance of Object Class.  -->
console.log(truck1 instanceof Truck);
console.log(truck1 instanceof Vehicle);
console.log(truck1 instanceof  Object);
