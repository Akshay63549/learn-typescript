"use strict";
const citizen1 = ["vinod", 29, true];
const citizen2 = ["Akshay", 18, false];
const displayCitizenInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    console.log("Name=" + name + " Age=" + age + " hasDrivingLicense=" + (hasDrivingLicense ? "yes" : "no"));
};
displayCitizenInfo(citizen1);
displayCitizenInfo(citizen2);
