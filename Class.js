"use strict";
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const persons1 = new Persons("akshay", 11, ["reading"]);
const persons2 = new Persons("raj", 13, ["writing"]);
console.log(persons1, persons2);
