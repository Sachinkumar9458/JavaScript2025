"Use strict";
// Data Types in JavaScript
// 1. Primitive Data Types
// - Number
// - String
// - Boolean
// - Undefined
// - Null
// - Symbol
// - BigInt
// 2. Non-Primitive Data Types
// - Object
// - Array
// - Function
// - Date
// - RegExp
// - Map
// - Set
// - WeakMap
// - WeakSet
// - JSON
// - Error
// 1. Primitive Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isMarried = false; // Boolean
let address; // Undefined
let salary = null; // Null
let uniqueId = Symbol("id"); // Symbol is used for uniqueness.
let bigNumber = BigInt(123456789012345678901234567890); // BigInt
// 2. Non-Primitive Data Types
let person = { // Object
    name: "John Doe",
    age: 25,
    isMarried: false
};
let numbers = [1, 2, 3, 4, 5]; // Array
let greet = function() { // Function
    console.log("Hello World");
};
let date = new Date(); // Date
let regex = /[a-z]/; // RegExp
let map = new Map(); // Map
let set = new Set(); // Set
let weakMap = new WeakMap(); // WeakMap
let weakSet = new WeakSet(); // WeakSet
let json = JSON.stringify(person); // JSON
let error = new Error("This is an error"); // Error
// Type Checking
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof address); // undefined
console.log(typeof salary); // object
console.log(typeof uniqueId); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof person); // object
console.log(typeof numbers); // object
console.log(typeof greet); // function
console.log(typeof date); // object
console.log(typeof regex); // object
console.log(typeof map); // object
console.log(typeof set); // object
console.log(typeof weakMap); // object
console.log(typeof weakSet); // object
console.log(typeof json); // string
console.log(typeof error); // object

