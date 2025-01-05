// node 01_basics/05_strings.js

const name = "VS"
const repoCount = 50

// console.log(name + repoCount + " Value");

// Backtick => String Interpolation => whatever variable we're creating, we can inject variable

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('VSup-SupV-com')

// const gameName = new Number (33)

// console.log(typeof 
//     gameName);
// console.log(gameName);
// console.log(gameName[0]);

//__proto__
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// to check character positon
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));

// difference in substring and 
// const newString = gameName.substring(0,3)

const newString = gameName.slice(-3,-1)

// console.log(newString);
// console.log(typeof newString);

// console.log(gameName.indexOf('u'));
// console.log(gameName.indexOf('u'));

// can't consider -ve value in substring

// trim and replace
// trim => remove spaces from front and last only

const newStringOne = "  VVVSSS  "
// console.log(newStringOne);
// console.log(newStringOne.trim());
// console.log(newStringOne.trimStart());
// console.log(newStringOne.trimEnd());

const url = " www.google.com"

console.log(url.replace('com','-'))

console.log(url);

console.log(url.replace(' ',''))

console.log(url.includes('www'));

console.log(url.includes('Sonam'));

console.log(gameName.split('V',2));

console.log(gameName.split('-',3));























