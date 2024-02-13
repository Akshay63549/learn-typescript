"use strict";
const inputValue = (value) => {
    console.log(value);
};
inputValue(1);
inputValue("akshay");
inputValue(true);
const employee = {
    name: "akshay",
    age: 17,
    emp_id: 165413,
    department: "It"
};
const user = { name: "akshay", age: 19 };
const userlocation = {
    city: 'Surat', country: "India"
};
const createUserProfile = (userDetails, location) => {
    return { ...userDetails, ...location };
};
const myCompleteInfo = createUserProfile(user, userlocation);
console.log(myCompleteInfo);
