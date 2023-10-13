'use strict'

//? encapsulation
// public
// protected  
// privatte


class Vehicle{
    //publicProperty
    brand='no brand'

    //protected Property 
    // normalde sadece bulunduğu class ve inherit edildiği class da geçerli
    // ama js de değil. sadece bu değişkene dokunmasanız iyi olur demek
    _model='no model'

    //private poperty
    #owner='clarusway'
    getBrand(){
        return this.brand
    }
    _getModel(){
        return this._model
    }
    #getOwner(){
        return this.#owner
    }

        
    
}
const vehicle1=new Vehicle()
console.log(vehicle1.brand)
console.log(vehicle1.owner) 

// console.log(vehicle1.#ovner) // private olduğu için çalşmaz

class Car extends Vehicle{
    
}
const car1=new Car()
console.log(car1.brand)
console.log(car1._model)
