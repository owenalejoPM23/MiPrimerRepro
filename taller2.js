var BankAccount = /** @class */ (function () {
    function BankAccount(initialbalance) {
        this._balance = initialbalance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // method Deposit money
    BankAccount.prototype.deposit = function (amount) {
        if (amount < 0) {
            console.log("Invalid deposit amount");
            return;
        }
        this._balance += amount;
    };
    // method to Withdraw money
    BankAccount.prototype.withdraw = function (amount) {
        if (amount < 0) {
            console.log("Invalid with Amount");
            return;
        }
        if ((this._balance - amount) < 0) {
            console.log("Insufficient Found");
            return;
        }
        this._balance -= amount;
    };
    return BankAccount;
}());
var myAccount = new BankAccount(10000);
myAccount.deposit(5000);
myAccount.withdraw(2000);
console.log(myAccount.balance);
