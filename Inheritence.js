"use strict";
class Persons1 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hi I'm ${this.name} and I'm ${this.age} year old. I love ${this.hobbies.join(',')}.`;
    }
}
class Students extends Persons1 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}.and i am in grade ${this.grade}`;
    }
}
// const persons3:Persons1 = new Persons1("akshay",11,["reading","sleeping"])
const persons4 = new Students("raj", 13, ["writing", "swimming"], 5);
console.log(persons4.introduce());
