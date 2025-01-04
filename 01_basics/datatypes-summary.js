// node 01_basics/datatypes-summary.js

// call by value & call by reference - memory allocation & access = > primitive & Non- primitive

// Primitive - Call by value 

// 7 types : String , Number , Boolean , null , undefined , Symbol (create unique value) , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Non - Primitive => Reference types => Call by Reference

// Array , Objects , Functions

// JS dynamic Langauage

// Declare Symbol

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

// const bigNumber = 12343455343353n
// console.log(typeof bigNumber);

// n will represent as bigInt datatype

// array
const heros = ["Shaktiman" , "Naagraj" , "Doga"];

console.log(typeof heros);


let myObj ={
    name : "VS",
    age : 28,
}

const myFunction = function(){
    console.log("Hello World!");
    return "Success"
}
myFunction();
// console.log( typeof bigNumber);

console.log(myFunction());

console.log(typeof myFunction());







