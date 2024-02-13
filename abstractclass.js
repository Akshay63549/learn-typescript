"use strict";
// abstract class cannnot be instantiated
// abstract class PerObj{
//     name:string;
//     age:number
// }
// class personA:PerObj={
//     name:"akshay",
//     age:11
// }
// class personB:PerObj={
//     name:"raj",
//     age:12
// }
// class personC:PerObj={
//     name:"sameer",
//     age:13
// }
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    ;
    dispalyArea = () => {
        console.log(`this is a ${this.color} circle with radius ${this.radius}`);
    };
}
class Square extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * this.radius;
    }
    ;
    dispalyArea = () => {
        console.log(`this is a ${this.color} circle with radius ${this.radius}`);
    };
}
const circle = new Circle("red", 5);
circle.calculateArea();
circle.dispalyArea;
console.log(circle.calculateArea());
const square = new Square("red", 5);
square.calculateArea();
square.dispalyArea;
console.log(square.calculateArea());
