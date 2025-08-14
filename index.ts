/*class Animal{


constructor( public name: string) {}


move(distancia: number):void{
console.log(`${this.name} moved ${distancia}meters.`);

  }
}



class Dog extends Animal{
constructor (public name: string = "dog"){

super(name);

}
}

let myDog = new Dog();
myDog.move(5);

*/

class Producto {

    constructor(
public id: string,
public price: string,
public description: string,
    ) {} 
    display(): void{
console.log(`ID:${this.id}, price: ${this.price} description: ${this.description} `

);

    }
}
class Book extends Producto {
    constructor(
public id: string,
public price: string,
public description: string,
public title: string,
public author: string,
    ) {
super (id, price, description);

    }
    display(): void{
        super.display();
console.log(`Title:${this.title}, Author: ${this.author} `)
  
    }
}

class Electronic extends Producto {
    constructor(
public id: string,
public price: string,
public description: string,
public brand: string,
public model: string,
    ) {
super (id, price, description);

    }
    display(): void{
        super.display();
console.log(`Brand:${this.brand}, Model: ${this.model} `)
  
    }
}





