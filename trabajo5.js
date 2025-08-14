var PaypalStrategy = /** @class */ (function () {
    function PaypalStrategy() {
    }
    PaypalStrategy.prototype.pay = function (amount) {
        console.log("paid ".concat(amount, " using paypal"));
    };
    return PaypalStrategy;
}());
var CreditCardStrategy = /** @class */ (function () {
    function CreditCardStrategy() {
    }
    CreditCardStrategy.prototype.pay = function (amount) {
        console.log("paid ".concat(amount, " using Credit card"));
    };
    return CreditCardStrategy;
}());
var BitcoinStrategy = /** @class */ (function () {
    function BitcoinStrategy() {
    }
    BitcoinStrategy.prototype.pay = function (amount) {
        console.log("paid ".concat(amount, " using bitcoin"));
    };
    return BitcoinStrategy;
}());
var ShoppinCart = /** @class */ (function () {
    function ShoppinCart(strategy) {
        this.strategy = strategy;
        this.amount = 0;
    }
    ShoppinCart.prototype.setPaymentStrategy = function (strategy) {
        this.strategy = strategy;
    };
    ShoppinCart.prototype.addToCart = function (value) {
        this.amount += value;
    };
    ShoppinCart.prototype.chekout = function () {
        this.strategy.pay(this.amount);
        this.amount = 0;
    };
    return ShoppinCart;
}());
//client code
var cart = new ShoppinCart(new PaypalStrategy());
cart.addToCart(100000);
cart.addToCart(1200);
cart.addToCart(200000);
cart.addToCart(340200);
cart.chekout();
cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.chekout();
