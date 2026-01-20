// Exercise 4 – Initials Builder

// Input: "Virat Kohli"
// Task:

// Convert to initials
// Expected Output: "V.K"


let input="Virat Kohli";

const words=input.split(" ");
const firstInitial = words[0].split("");
const secondInitial=words[1].split("");
console.log(firstInitial[0]+'.'+secondInitial[0]);

