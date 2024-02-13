const inputValue=(value:string|boolean|number)=>{
 console.log(value)
}

inputValue(1)
inputValue("akshay")
inputValue(true)



type PersonDetail={
    name:string;
    age:number
}

type Employee={
    emp_id:number;
    department:string
}

type EmployeeDetails=PersonDetail&Employee

const employee:EmployeeDetails={
name:"akshay",
age:17,
emp_id:165413,
department:"It"
}


type User={
    name:string;
    age:number
}

type UserLocation={
    city:string;
    country:string
}

const user:User={name:"akshay",age:19}
const userlocation:UserLocation={
    city:'Surat',country:"India"
}

const createUserProfile=(userDetails:User,location:UserLocation):User&UserLocation=>{
    return {...userDetails,...location}
}

const myCompleteInfo:User&UserLocation=createUserProfile(user,userlocation)
console.log(myCompleteInfo)