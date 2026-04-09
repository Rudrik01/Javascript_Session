// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers

let str="Hello";
const country = "India";
// str=10;// Error: Type 'number' is not assignable to type 'string'.
country="USA";// Error: Cannot assign to 'country' because it is a constant.


console.log(typeof str); // Output: string
console.log(typeof country);// Output: number


function add(a,b){  
    return a+b;
}

console.log(typeof add(5,10)); // Output: number
console.log(typeof add("Hello","World")); // Output: string
