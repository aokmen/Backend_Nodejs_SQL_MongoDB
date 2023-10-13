'use strict'
//? GETTER (veri getirme) and SETTER (değer atama /güncelleme) methods

class Car{
    #price
    // static staticVar='value'
   
    constructor(marka,model){
        this.marka=marka
        this.model=model
    }
  
    get getPrice(){
        return this.#price
    } 
    set setPrice(prc){
        this.#price=prc
    } 
    getFirm(){
        // console.log(this.firm)
        return this.firm
    }
    // static instance oluşturmadan metod ve variable kullanmak için
    static firm='MERCEDES'
    static staticMetod(){
        console.log('static metod çalıştı')
        return this
    }
}
const car1=new Car('mrcedes','benz')
console.log(car1.firm) // instance erişemedi
console.log(car1.getFirm());
class NewCar extends Car{
    // static değişkenler instance a aktarılmaz
    // x=firm
    getFirm(){
        console.log(x)
    }
}
const car2=new NewCar()
console.log(car2);
// console.log(staticMetod())
// console.log(firm)
// staticMetod()
// static instance oluşturmadan metod ve variable kullanmak için
console.log(Car.firm)
console.log(Car.staticMetod())