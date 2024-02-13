interface Greet{
name:string;
age:number
}

const greet2:Greet={
    name:"akshay",
    age:18
}

interface Products{
    name:string;
    price:number;
    quantity:number;
}

const product1:Products={
    name:"iphone15",
    price:80000,
    quantity:2
}

const calculateTotalPrice=(product:Products):number=>{
return (product.price*product.quantity)
}

console.log(calculateTotalPrice(product1))
// Advance
// interface Data extends Greet , Products{}


