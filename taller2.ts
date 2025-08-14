class BankAccount {
private _balance: number;

constructor (initialbalance: number){
    this._balance = initialbalance;

}

public get balance(): number {
    return this._balance;
};


// method Deposit money
public deposit(amount: number):void{
if (amount < 0){

console.log("Invalid deposit amount");
return;
}
this._balance += amount;
}
// method to Withdraw money
public withdraw(amount:number): void {

if (amount < 0){
console.log("Invalid with Amount");
return;


}
if (( this._balance - amount) < 0){
console.log("Insufficient Found");
return;
}


this._balance -= amount;



}



}




const myAccount = new BankAccount(10000);
myAccount.deposit(5000)
myAccount.withdraw(2000);
console.log(myAccount.balance);
