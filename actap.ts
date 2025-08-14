interface Coffee{
    cost(): number;
    description(): string;
}
class SimpleCoffee implements Coffee {


    public cost(): number {
        return 10;
    }
    public description(): string {
        return "CAFE CON SABOR A CAFE";

    }
}

abstract class CoffeeDecorator implements Coffee  {
constructor(protected coffee: Coffee){}

abstract cost(): number;
abstract description(): string;
}
class MilkDecorator extends CoffeeDecorator{
    constructor(coffee: Coffee){
        super(coffee)
    }

    public cost(): number {
        return this.coffee.cost() + 2;
    }

    public description(): string {
        return `${this.coffee.description()}, with milk`;

    }
}

// CLIENT CODE
  let coffee = new SimpleCoffee();
  coffee = new MilkDecorator(coffee);


  console.log(`cost ${coffee.cost()}`);
  console.log(`description ${coffee.description()}`);
  
  









