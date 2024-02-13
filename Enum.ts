
enum Roles{
    user="user",
    admin="admin"
}

type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role:Roles
    // role: ("user" | "admin")[];
}

const user1:LoginDetails={
    email:"admin@gmail.com",
    password:"abc",
    role:Roles.admin
}

const user2:LoginDetails={
    email:"user@gmail.com",
    password:"abcd",
    role:Roles.user
}


const isAdmin =(user:LoginDetails):string=>{
const {name,role}=user
return role==="admin"?"you are eligible to add products":"you are not eligible to add products"

}

console.log(isAdmin(user1))
console.log(isAdmin(user2))