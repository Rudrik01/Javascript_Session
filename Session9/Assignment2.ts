// Assignment : TypeScript Basics
// Create a variable prices as an array of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100
// Think About:
// What happens if you pass a string?
// Which errors are caught before running the code?


const prices :number[]=[10,20,30,40,50];


function calculateTotal(prices:number[]):number{
    let total :number=prices.reduce((sum,price)=>sum+price,0);
    return total;

}

function check(num1:number,num2:number):string{
    let result :number=num1+num2;
    if(result>100){
        return "The result is greater than 100";
    }else{
        return "The result is less than or equal to 100";
    }
};

console.log(calculateTotal(prices)); 
console.log(check(60,50));


/*
What happens if you pass a string?
-->If you pass a string to the calculateTotal function, it will result in a compile-time error because the function expects an array of numbers. Similarly, if you pass a string to the check function, it will also result in a compile-time error because the function expects two numbers as arguments.

Which errors are caught before running the code?
-->TypeScript's static type checking will catch errors related to type mismatches before running the code. For example, if you try to pass a string to

*/
