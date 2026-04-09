// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers


var str = "Hello";
var country = "India";
str = 10; // Error: Type 'number' is not assignable to type 'string'.
console.log(typeof str); // Output: string
console.log(typeof country); // Output: number
// num=50;// Error: Cannot assign to 'num' because it is a constant.
function add(a, b) {
    return a + b;
}
add(5, 10);
add("Hello", "World");
