"use strict";
var num1 = 1;
//@ts-ignore
// function
const sum = (a, b) => {
    return a + b;
};
let myFavNum = 2;
let myFulllName = "akshay vaghasiya";
// let bigNumber: bigint =9007199254740992n
// console.log(bigNumber)
// let anotherBignUmber: bigint=BigInt("9007199254740992554454564")
// console.log(anotherBignUmber)
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}
async function processData() {
    const response = await fetchData();
    if (typeof response === 'object') {
        console.log(response, 'cjkfdsdfd');
    }
}
// const response:unknown= processData()
function greet(name) {
    return `hii ${name} welcome to our company`;
}
greet('akshay');
const isPalindrome = (palin) => {
    let mypalin = palin?.split("").reverse().join("");
    return mypalin === palin;
};
console.log(isPalindrome("12321"));
let abc = "abc";
abc = "123";
console.log(abc);
const greet3 = (name, id) => {
    if (id) {
        return `hello ${name} and your id is ${id}`;
    }
    else {
        return `hello ${name}`;
    }
};
const result = greet3("akshay");
const result1 = greet3("akshay", 1);
console.log(result);
console.log(result1);
