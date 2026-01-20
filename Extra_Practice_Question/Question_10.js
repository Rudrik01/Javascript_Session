// Exercise 10 – Odd Doubler

// Input: [1,2,3,4,5]
// Task:

// Filter odd → double them
// Expected Output: [2,6,10]

const input =[1,2,3,4,5];

const doubledOdd=input.filter((number)=>{
    if(number%2!=0){
        return number;
    }
}).map((number)=>{
    return number*2;
});

console.log(doubledOdd);