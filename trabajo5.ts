 interface paymentStrategy{
    pay(amount: number): void;
 }

 class PaypalStrategy implements paymentStrategy{
    public pay(amount: number): void {
        console.log(`paid ${amount} using paypal`);
        
    }

 }
 
 class CreditCardStrategy implements paymentStrategy{
    public pay(amount: number): void {
        console.log(`paid ${amount} using Credit card`);
        
    }
}

 class BitcoinStrategy  implements paymentStrategy{
    public pay(amount: number): void {
        console.log(`paid ${amount} using bitcoin`);
        
    }
}
 class ShoppinCart{
    private amount: number = 0;

    constructor(private strategy: PaypalStrategy){}


    public setPaymentStrategy(strategy: paymentStrategy):void{
        this.strategy = strategy;

    }
public addToCart (value: number): void{
    this.amount += value;

}



public chekout():void{
    this.strategy.pay(this.amount);
    this.amount = 0;

}

 }


 //client code

 let cart = new ShoppinCart(new PaypalStrategy());
 cart.addToCart(100000);
 cart.addToCart(1200)
cart.addToCart(200000);
cart.addToCart(340200);
cart.chekout();



cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.chekout();

