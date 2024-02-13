type Student={
    name:string;
    age:number;
    gender?:string;
    greet?:(country:string)=>string // method call signature
}

const student1={
    name:"akshay",
    age:22,
    greet:((country:string):string=>`Welcome my name is ${student1.name}, I am ${student1.age} years old & i am from ${country}`)
    // (country:string):string //pure call signature
}

const student2={
    name:"raj",
    age:22,
    greet:((country:string):string=>`Welcome my name is ${student2.name}, I am ${student2.age} years old & i am from ${country}`)
}


const introduction=(student1:Student):string=>{
    const {name,age}=student1
    return `Welcome my name is ${name}, I am ${age} years old`
}
console.log(introduction(student1))

console.log(student1.greet("India"))
console.log(student2.greet("Neaal"))