"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "admin@gmail.com",
    password: "abc",
    role: Roles.admin
};
const user2 = {
    email: "user@gmail.com",
    password: "abcd",
    role: Roles.user
};
const isAdmin = (user) => {
    const { name, role } = user;
    return role === "admin" ? "you are eligible to add products" : "you are not eligible to add products";
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
