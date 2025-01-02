// node 01_basics/03_conversionOperation.js
let score = "+123"

// console.log(typeof score);
// console.log(typeof(score));
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //33abc is not a number (NaN)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// Nan => data type is number.(- , 0 , + , NaN) NaN itself is value

// let isLoggedIn = "VS"
// let isLoggedIn = ""
// let isLoggedIn = NaN
// let isLoggedIn = null
let isLoggedIn = undefined
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
//anything other than 0 is always true. -0 , null , NaN , empty string ""=> false , if anything is present is true
// "" => false
// "VS" => true

let someNumber =33
// let someNumber =null
// let someNumber = NaN
// let someNumber =undefined
let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// NaN, null, undefined => string
