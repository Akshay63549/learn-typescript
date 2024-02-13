"use strict";
// the get method dosen't take any parameters, and the set method takes only one parameter.
class Persons111 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hi I'm ${this.name} and I am ${this._age} years old .I love ${this.hobbies.join(',')}.`;
    }
    // setter method
    set age(age) {
        if (age > 100 || age < 10) {
            throw new Error("age is not valid");
        }
        else {
            this._age = age;
        }
    }
    //getter method
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        else {
            return this._age;
        }
    }
}
const persons411 = new Persons111("raj", ["writing", "swimming"]);
persons411.age = 12;
console.log(persons411.introduce());
console.log(persons411.age);
