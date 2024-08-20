// Numbers
let age = 30;
let height = 5.8;

// Strings
let nm = "John Doe";
let message = 'Hello, World!'; 

// Booleans
let isStudent = true;
let isEmployed = false;

// Arrays
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];

// Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: true
};

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

// Undefined
let variableUndefined;

// Null
let variableNull = null;

// Symbol
const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

// typeof operator
console.log(typeof age); // "number"
console.log(typeof nm); // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof fruits); // "object"
console.log(typeof person); // "object"
console.log(typeof greet); // "function"
console.log(typeof variableUndefined); // "undefined"
console.log(typeof variableNull); // "object" (a known quirk in JavaScript)
console.log(typeof symbol1); // "symbol"
