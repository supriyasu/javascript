// node 02_basics/03_objects.js

// singleton => object created from custructor, not from literals


// Object.create // constructor method => singleton

// object literals

let mySym = Symbol("key1")

const JsUser = {
    name : "Suvika",
    "full name": "Supriya Vikas", // value of full name will only accessible like this in case of this naming covention[""]
    [mySym]: "mykey1", // symbol declaration // o/p => [Symbol(key1)]: 'mykey1'
    age : 28,
    email : "suvika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.full name);

// declation of symbol in object => [Symbol name] : ""
console.log(JsUser[mySym]);
console.log(typeof mySym);

JsUser.email ="suvika@js.com"
// Object.freeze(JsUser)  => we can't change and perform any operation on JsUser once freeze
JsUser.email = "suvika@ms.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello from VS");
    
}

JsUser.greetingTwo =function(){
    console.log(`Hello from VS, ${this.name}`);
    // return "VS"
}

// console.log(JsUser.greeting); // [Function (anonymous)] => function is not executed here , only function came
// console.log(JsUser.greeting());

// console.log(JsUser.greetingTwo());







