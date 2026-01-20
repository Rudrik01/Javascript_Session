// Exercise 5 – Reverse Words

// Input: "learn javascript today"
// Task:

// Reverse word order
// Expected Output: "today javascript learn"


let input="learn javascript today";

let words= input.split(' ');

let reverserdWords=words.reverse();
console.log(reverserdWords);


console.log(reverserdWords.join(' '));
