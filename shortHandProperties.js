"use strict";
// class Persons111{
//        constructor(public name: string,public age: number,protected hobbies: string[]){
//        }
//        introduce():string{
//            return `hi I'm ${this.name} and I'm ${this.age} year old. I love ${this .hobbies.join(',')}.`
//        }
//    }
//    class Students11 extends Persons111{
//        grade:number;
//        constructor(name: string, age: number, hobbies: string[],grade:number){
//            super(name,age,hobbies);
//            this.grade = grade
//        }
//        introduce():string{
//            return `${super.introduce()}.and i am in grade ${this.grade}`
//        //    return this.hobbies.join(',')
//        }
//    }
//    // const persons3:Persons1 = new Persons1("akshay",11,["reading","sleeping"])
//    const persons411:Students11 = new Students11("raj",13,["writing","swimming"],5)
//    console.log(persons411.introduce())
//    // console.log(persons41.hobbies)
