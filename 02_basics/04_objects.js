// node 02_basics/04_objects.js

// Singleton Object

// const tinderUser = new Object()

// Non- singleton object

let tinderUser={}
tinderUser.id = "123vs"
tinderUser.name = "Suvika"
tinderUser.isLoggedIn = false

tinderUser.name = "Suvika1"

// console.log(tinderUser);

const regularUser = {
    email: "suvika@gmail.com",
    fullname: {
        userfullname: {
            firstname: "VS",
            lastname: "KG"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)  // {} => treat as target => optional value => empty object

// most useful =>spread
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Assignment of multiple objects in array
const users = [
    { 
        id : 1,
        email : "vs@gmail.com"
    },
    { 
        id : 1,
        email : "vs@gmail.com"
    },
    { 
        id : 1,
        email : "vs@gmail.com"
    },
]

users[1].email
// console.log(tinderUser); // [ [ 'id', '123vs' ], [ 'name', 'Suvika1' ], [ 'isLoggedIn', false ] ]

// ***** Return keys of object in the form of Array
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123vs', 'Suvika1', false ]

// Return object in form of Array as Key-value pair
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123vs' ], [ 'name', 'Suvika1' ], [ 'isLoggedIn', false ] ]

// hasOwnProperty - to check attribute of object whether it's present or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// console.log(tinderUser.hasOwnProperty('isLogged')); // false

// de-structure

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "V"
}

// course.courseInstructor

// const {courseInstructor} = course

const {courseInstructor : instructor} = course


// console.log(courseInstructor); // V

// console.log(instructor); // V

// react
// const navbar = (props.company) => {

    const navbar = ({company}) => {
}

navbar(company = "VS")
// console.log(company);

// **********API*******
// JSON => JavaScript Object Notation

// {
//     "name" : "suvika",
//     "coursename" : "JS",
//     "price" : "free"
// }

// Object in Array

[
    {},
    {},
    {}
]

// TOOL JSON formatter , randomuserme

















