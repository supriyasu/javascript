// node 01_basics/07_datesinJs.js

let myDate = new Date()
// console.log(myDate) // 2025-01-08T19:27:57.046Z
// console.log(myDate.toString()); // Wed Jan 08 2025 19:28:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Jan 08 2025
// console.log(myDate.toLocaleString()); // 1/8/2025, 7:31:32 PM
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate);  //2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// In JS month will start with 0

// console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("2023-=1-14")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM

// When in Date object, month is defined in single digit then it will start with 0 as an Array
// But in when it's in String & in DD_MM_YYYY format then it will start with 01

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1736365240896

// console.log(myCreatedDate.getTime()); //673654400000
// console.log(Date.now()); //1736365313391

// console.log(Math.floor(Date.now()/1000));  //1736365363

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); 
console.log(newDate.getMonth()+1); 
console.log(newDate.getDay());

// `` => String Interpolation `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
   weekday: "long", 
})

// toLocaleString - we can able to define inside this method













