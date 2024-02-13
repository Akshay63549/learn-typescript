class Persons{
    name: string;
    age: number;
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]){
            this.name = name;
            this.age = age;
            this.hobbies =hobbies
    }
}


const persons1:Persons = new Persons("akshay",11,["reading"])
const persons2:Persons = new Persons("raj",13,["writing"])
console.log(persons1,persons2)