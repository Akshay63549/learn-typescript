"use strict";
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newbalance) {
        if (newbalance < 0) {
            throw new Error("Amount must be greater than 0");
        }
        else {
            this._balance = newbalance;
        }
    }
}
const account = new BankAccount();
account.balance = 10;
console.log(account);
class Temprature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newcelsius) {
        if (newcelsius < 0) {
            throw new Error("Amount must be greater than 0");
        }
        else {
            this._celsius = newcelsius;
        }
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newfahrenheit) {
        if (newfahrenheit < 0) {
            throw new Error("Amount must be greater than 0");
        }
        else {
            this._celsius = ((newfahrenheit - 32) * 5) / 9;
        }
    }
}
const temp = new Temprature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 77;
console.log(temp.celsius);
