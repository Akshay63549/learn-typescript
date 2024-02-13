type Person={
        name:string;
        age?:number;
        address:{city:string,country:string}
}

type Product={
    name:string;
    price:number;
    quantity:number
}

const person:Person={
    name:"akshay",
    age:15,
    address:{
        city:"surat",
        country:"India"
    }
}
const person1:Person={
    name:"raj",
    address:{
        city:"kathmandu",
        country:"Nepal"
    }
}
console.log(person,person1)

const product:Product={
    name:"Burger",
    price:10,
    quantity:2
}

const totalPrice=(product:Product)=>{
        return `${product.name}total cost around ${product.price*product.quantity}`
}
console.log(totalPrice(product))