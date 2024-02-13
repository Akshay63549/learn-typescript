class Persons1{
    name: string;
    age: number;
    hobbies: string[]

    constructor(name: string, age: number, hobbies: string[]){
            this.name = name;
            this.age = age;
            this.hobbies =hobbies
    }

    introduce():string{
        return `hi I'm ${this.name} and I'm ${this.age} year old. I love ${this .hobbies.join(',')}.`
    }
}

class Students extends Persons1{
    grade:number;

    constructor(name: string, age: number, hobbies: string[],grade:number){
        super(name,age,hobbies);
        this.grade = grade
    }

    introduce():string{
        return `${super.introduce()}.and i am in grade ${this.grade}`
    }
}


// const persons3:Persons1 = new Persons1("akshay",11,["reading","sleeping"])
const persons4:Students = new Students("raj",13,["writing","swimming"],5)
console.log(persons4.introduce())