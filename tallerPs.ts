 class Grinder{
    public grindBeads(): void {
        console.log("Grinding beans...");
        
    }
 }


 class Boiler{
    public boilWater(): void{
        console.log(" boiling water...");
        
    }
 }

 class Brewer{
    public brewCoffee(): void{
        console.log("brewing Coffe");
        
    }
 }

  class CoffeeMakerFacade {
    constructor(

 private grinder: Grinder,
 private boiler: Boiler,
 private brewer: Brewer,

    ){}

    public makeCoffee(){
        this.grinder.grindBeads();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
        console.log(" THE COFFEE IS READY");
        
    }
  }



  //client code

  let grinder = new Grinder();
let boiler = new Boiler();
let brewer = new Brewer();

let coffeMarker = new CoffeeMakerFacade(grinder, boiler,brewer);
coffeMarker.makeCoffee();


