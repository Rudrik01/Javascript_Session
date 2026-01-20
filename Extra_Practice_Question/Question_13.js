// Exercise 13 – Cart with Tax

// Input: [100, 200, 300]
// Task:

// Add 18% GST then find total
// Expected Output: 708



const input = [100,200,300];

let total=input.reduce((acc,price)=>{
    acc+=price;
    return acc;
})

let finalTotal=total+(total*0.18);

console.log(finalTotal);