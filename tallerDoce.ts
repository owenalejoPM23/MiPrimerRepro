abstract class paymentProcessor{
constructor(public amount: number){}
abstract processPayment(): void;

}

class paypalProcessor extends paymentProcessor{
    public processPayment(): void {
        console.log(`process paypal payment, ${this.amount}`);
        
    }
}




class StripeProcessor extends paymentProcessor{
    public processPayment(): void {
        console.log(`process stripe payment, ${this.amount}`);
        
    }
}

class BankTransferProcessor extends paymentProcessor{
    public processPayment(): void {
        console.log(`process Bank Transfer , ${this.amount}`);
        
    }
}

class paymentProcessorFactory {
    public createProcessor(type: 'paypal'|'stripe'|'bank',amount:number) {
switch(type){
    case 'paypal':
        return new paypalProcessor(amount);


        case "stripe":
        return new StripeProcessor(amount);
        case "bank":
            return new BankTransferProcessor(amount);

}

    }
}






const ProcessorFactory = new paymentProcessorFactory();

const paypalPayment=  ProcessorFactory.createProcessor("paypal", 200)

const  StripePayment = ProcessorFactory.createProcessor("stripe", 300)

paypalPayment.processPayment();
StripePayment.processPayment();