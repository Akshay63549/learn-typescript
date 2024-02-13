"use strict";
const person = {
    name: "akshay",
    age: 15,
    address: {
        city: "surat",
        country: "India"
    }
};
const person1 = {
    name: "raj",
    address: {
        city: "kathmandu",
        country: "Nepal"
    }
};
console.log(person, person1);
const product = {
    name: "Burger",
    price: 10,
    quantity: 2
};
const totalPrice = (product) => {
    return `${product.name}total cost around ${product.price * product.quantity}`;
};
console.log(totalPrice(product));
