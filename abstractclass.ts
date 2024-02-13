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

abstract class Shape{
    constructor(protected color:string){}
    abstract calculateArea():number;
    abstract dispalyArea:()=>void;
}

class Circle extends Shape{
    constructor(protected color:string,protected radius:number){
        super(color)
    }
    public calculateArea():number{
            return Math.PI*this.radius*this.radius
    };

    dispalyArea=()=>{
        console.log(`this is a ${this.color} circle with radius ${this.radius}`)
    };

}

class Square extends Shape{
    constructor(protected color:string,protected radius:number){
        super(color)
    }
    public calculateArea():number{
            return this.radius*this.radius
    };

    dispalyArea=()=>{
        console.log(`this is a ${this.color} circle with radius ${this.radius}`)
    };

}


const circle = new Circle("red",5)
circle.calculateArea()
circle.dispalyArea
console.log(circle.calculateArea())
const square = new Square("red",5)
square.calculateArea()
square.dispalyArea
console.log(square.calculateArea())