// the get method dosen't take any parameters, and the set method takes only one parameter.

class Persons111 {
    public _age: number|undefined;
    constructor(public name: string,protected hobbies: string[]){      
    }
    introduce():string{
        return `hi I'm ${this.name} and I am ${this._age} years old .I love ${this .hobbies.join(',')}.`
    }

// setter method
public set age(age:number){
    if (age>100 || age<10) {
                       throw new Error("age is not valid");   
                   }
                   else{
                       this._age=age
                   }
   }
   //getter method
   public get age():number{
       if (this._age===undefined) {
           throw new Error("Age is not defined");   
       } else {
           return this._age;
       }
   }

}



const persons411:Persons111 = new Persons111("raj",["writing","swimming"])
persons411.age=12
console.log(persons411.introduce())
console.log(persons411.age)

