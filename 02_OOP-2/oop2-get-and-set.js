'use strict'
//? GETTER (veri getirme) and SETTER (değer atama /güncelleme) methods

class Car{
    #price
    constructor(marka,model){
        this.marka=marka
        this.model=model
    }
    // getPrice(){
    //     return this.#price
    // } 
    get getPrice(){
        return this.#price
    } 
    set setPrice(prc){
        this.#price=prc
    } 

}
const car1=new Car('mrcedes','benz')
console.log(car1.getPrice)
// car1.setPrice(2000)
car1.setPrice=2000 // seter yöntemi ile yazıldı ise
console.log(car1)
console.log(car1.getPrice)