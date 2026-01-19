// Exercise 1 – Username Generator

// Input: "John Doe"
// Task:

// Convert to lowercase

// Replace space with underscore
// Expected Output: "john_doe"



var str="John Doe";
str=str.toLowerCase();
var process=str.split(" ");
var processedData=process.join("_");

console.log(processedData);