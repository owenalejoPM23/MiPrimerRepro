 abstract class Car{

constructor(
    public  model: string, public productionYear: number
){}
abstract displyCarInfo(): void;


 }





 class Sdan extends Car {
    public displyCarInfo(): void {
        
        console.log(`This is a sedan, model: ${this.model}, production Year: ${this.productionYear}`);

        
    }
 }

  class Suv extends Car {
    public displyCarInfo(): void {
        
        console.log(`This is a Suv, model: ${this.model}, production Year: ${this.productionYear}`);
        
        
    }
 }

  class HatchBack extends Car {
    public displyCarInfo(): void {
        
        console.log(`This is a HatchBack, model: ${this.model}, production Year: ${this.productionYear}`);
        
        
    }
 }

 class CarFactory{
public createrCar(type: 'sedan' | ' Suv' | 'HatchBack',
    model: string, 
    productionYear:number,
    
): Car{
    switch(type){
    case "sedan":
        return new Sdan (model, productionYear)

        case " Suv":
        return new Suv (model, productionYear)

        case "HatchBack":
        return new HatchBack (model, productionYear)
    
    default:
        throw new Error("invalid car type")
}      


 }
    }
    
const carFactory = new CarFactory

  const Sedan = carFactory.createrCar("sedan", "camry", 202);
  Sedan.displyCarInfo

  
  const SUV = carFactory.createrCar("sedan", "RAV4", 202);
  SUV.displyCarInfo

  

  