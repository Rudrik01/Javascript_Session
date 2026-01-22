// 🟢 PART 1: Primitives vs References (Warm-up)
// Q1. Predict the Output & Memory State
// let x = 20;
// let y = x;

// y = y + 10;

// console.log(x); // ?
// console.log(y); // ?


// 👉 Explain why stack memory prevents side effects here.



let x = 20;
let y = x;

y = y + 10;

console.log(x); 20
console.log(y);30


/*

At first a GEC is created and the declaration of variable is undefined in the memory section. Then after that 20 is stored in the stack 
memory at x. after that y is initialezed to x means a copy of x is created then arthimetic operation occurs and make the y to 30

therefore the output is 20 and 30
 */