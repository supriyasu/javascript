// node 02_basics/02_array.js

const marvel_heros =["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(dc_heros);  // [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heros[3]); // [ 'Superman', 'Flash', 'Batman' ]
// console.log(marvel_heros[3][1]); // Flash

const all_heros=marvel_heros.concat(dc_heros)
// console.log(marvel_heros); 
// console.log(dc_heros);
// console.log(all_heros);
// console.log(all_heros[4]);

const obj= {
    name : "Suvika",
    age : 28
}
marvel_heros.push(obj)
console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spiderman', { name: 'Suvika', age: 28 } ]


// Outpt
// [ 'Thor', 'Ironman', 'Spiderman' ]
// [ 'Superman', 'Flash', 'Batman' ]
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

/** 
1 => Push - Add array (as an element) to existing array , modify exisitng array
2 => Concat -It will create new array with existing arrays and it will not modify exisitng arrays
**/

// 3 => Spread - can add arrays as many as you want with , ...
const all_new_heros =[...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log(all_new_heros[5]); // Batman

const another_array = [1,2,3, [4,5,6],7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array); 
/** [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] **/

// console.log(Array.isArray("VS")) // false => it's String
// console.log(Array.isArray(real_another_array)) // true
// console.log(Array.isArray(["VS"]))// true
// console.log(Array.from("SUVIKA")); // [ 'S', 'U', 'V', 'I', 'K', 'A' ]
// console.log(Array.from({name: "VS"})); // interesing // empty error []

// from => convert string into single element as an array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

// of => multiple variable can be add as an array











