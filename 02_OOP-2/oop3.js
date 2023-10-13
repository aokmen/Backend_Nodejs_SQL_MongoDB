'use strict'


//? /*class expression*/
// const ClassName=class {
//     //property
// }

//?/*class decleration*/ 
// class ClassName{ // pascal case tavsiye edilir.
//     // x=4
//     //porperties
//     //function()
//     namex='clarusway'
//?constructer function
        // contructor(parapetre1,parapetre2,parametre3='default value'){

        // }
//     function(){
//         console.log(this.namex);
//         // return this.namex
//     }
// }
// const newObje=new ClassName() // instance oluştu
// console.log(newObje);
// console.log(newObje.namex)
// console.log( newObje.function())

// const newObje2=new ClassName()

/* Sample*/
class Vehicle{ // blueprint,template,prototype

    // brand='marka'
    // model='model'
    // year=1900
    // used=false
    // engineIsRunning=false
   
    constructor(brand,model,year=1900){
        this.brand=brand
        this.model=model
        this.year=year
        this.used=false
    
    }
    engineIsRunning=false

    runEngine() {
        this.engineIsRunning=true
        console.log(this.brand+" "+this.model+" "+ "motor çalıştı")
        return this.engineIsRunning        
    }
    getDetail(){
        return  (this.brand + " " +this.year)
    }
}

// const vehicle1=new Vehicle()
// console.log(vehicle1)
// vehicle1.brand='tesla'
// console.log(vehicle1)
// const vehicle2=new Vehicle('toyota','corolla',2021)
// console.log(vehicle2);
// vehicle2.runEngine()
// console.log()

//? Inheritance
//? bir class ın herşeyini devralma / miras alma

class Car extends Vehicle {
    sunroof=true
    // constructor(brand,model,year){
        
    //     super(brand,model,year)
    // }
    constructor(brand,model,year,sr){
        super(brand,model,year) // parent cnstructor çalışsın
        this.sunroof=sr        
    }

}
// const car1=new Car()
// console.log(car1)
// console.log( car1.sunroof)
// console.log( car1.used)
// car1.brand='ford'
// console.log( car1.brand)
// const car2=new Car('nissan','micra',2015,false)
// console.log(car2)
// car2.runEngine()


//?Polymorphism

class Truck extends Vehicle{
    maxcapacity=100
    // override = parent class taki fonksiyonu yeniden yazma / ezme
    getDetail(){
        console.log(this.brand)
        // return  (this.brand)
    }
    // overload = aynı isimde fonksiyonlara faklı işlevler oluşturma
    // getDetail(p1,p2){
    //     console.log(this.model)
    //     // return  (this.model)
    // }


}
const truck1 =new Truck('Mercedes','atego',2020)
console.log(truck1);
// truck1.getDetail(1)
// truck1.getDetail(1,2)
console.log(truck1.getDetail()); 

