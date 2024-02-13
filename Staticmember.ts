class People{
    constructor(public name:string){}
}

const user11=new People("akshay")
user11.name="akshay1"

console.log(user11)


class MathOperations {
    public static PI:number = Math.PI;
    public static add(x:number,y:number){
        return x+y
    }
    public static sub(x:number,y:number){
        return x-y
    }
}

console.log(MathOperations.PI)
console.log(MathOperations.add(5,10))
console.log(MathOperations.sub(100,10))