"use strict";
// long method
// const logAndReturn=(value:number|string|boolean):number|string|boolean=>{
// return value
// }
// generics method
// const logAndReturn=<T>(a:T,b:T)=>{
//     console.log(a + b)
//     }
// const numberResult=logAndReturn<number,number>(42,52)
// const stringResult=logAndReturn<string,string>("Hello","Generics")
// const booleanResult=logAndReturn<boolean,number>(true,9)
// console.log(numberResult)
// console.log(stringResult)
// console.log(booleanResult)
const logAndReturn = (a, b) => {
    console.log(typeof a);
    console.log(typeof b);
};
const numberResult = logAndReturn(42, 52);
const stringResult = logAndReturn("Hello", "Generics");
// Fix the type of the second argument to be a boolean instead of number
const booleanResult = logAndReturn(true, false);
