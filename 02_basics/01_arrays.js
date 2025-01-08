// node 02_basics/01_arrays.js

//array => object => collection of multiple items in single variable 
// resizable array
// **** copy operations - array can create shalow copies - whose can share with same reference point.

// Deep Copy- onsole.logcopies don't share same reference

// Array Declation
const myArr = [0, 1, 2, 3, 4, 5]//, true, "VS"]
// console.log(myArr[0]);

const myHeros = ["Shaktiman" , "Nagraj"]

const myArr2 = new Array(1,2,3,4,5)

// Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // remove last element

// myArr.unshift(9)  // add in 1st position, in 0 index
// myArr.shift()  // remove from start

// Push => Unshift (Add from last & start respectively)
// Pop => Shift (remove from last & start respectively)

// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(9)); // -1

// Adds all the elements of an array into a String
const newArr = myArr.join()

// console.log(typeof myArr);  // object
// console.log(myArr);  // [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof newArr);  // string
// console.log(newArr); // 0,1,2,3,4,5 

// slice, splice

console.log("A ", myArr);  // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) 

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr); //C  [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]

// Splice =>    Modify existing array after splice
//              consider last index also
//              returns sub-array 





















