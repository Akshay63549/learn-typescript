"use strict";
const greet2 = {
    name: "akshay",
    age: 18
};
const product1 = {
    name: "iphone15",
    price: 80000,
    quantity: 2
};
const calculateTotalPrice = (product) => {
    return (product.price * product.quantity);
};
console.log(calculateTotalPrice(product1));
// Advance
// interface Data extends Greet , Products{}
