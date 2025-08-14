     abstract class CakeRecipe{

        public bakeCake():void{
            this.bakeCake();
            this.mixIngredients();
            this.bake();
            this.coolingDown();
            this.decorate();

            
        }
        protected preHearOven(): void{
            console.log("PreHeating oven to 175 degree C")
        }
protected bake():void{
    console.log("Baking cake........");   
}
protected coolingDown():void{
    console.log("Decorating cake.........");
    
}

protected decorate(): void{
    console.log("Decorating cake.........");
    
}
protected abstract mixIngredients():void;

     }


     class ChocolateCake extends CakeRecipe{
        protected mixIngredients(): void {
            console.log("mixing: cholate, sugar, butter, flour. eggs");

            
        }


        protected decorate(): void {
            console.log(" Decorating cake with chocolate");
            

        }
        
     }

      class vainillaCake extends CakeRecipe{
        protected mixIngredients(): void {
            console.log("mixing: cholate, sugar, butter, flour. eggs");

            
        }}

        //client code
        function bakeCake (cake: CakeRecipe){
            cake.bakeCake();

        }

        console.log("baking a chocolate cake");
        bakeCake(new ChocolateCake())
        