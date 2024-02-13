"use strict";
class People {
    name;
    constructor(name) {
        this.name = name;
    }
}
const user11 = new People("akshay");
user11.name = "akshay1";
console.log(user11);
class MathOperations {
    static PI = Math.PI;
    static add(x, y) {
        return x + y;
    }
    static sub(x, y) {
        return x - y;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(5, 10));
console.log(MathOperations.sub(100, 10));
