// Exercise 19 – E-Commerce

// Input:

// [
//  {item:"pen", price:10, qty:2},
//  {item:"book", price:50, qty:1},
//  {item:"bag", price:500, qty:0}
// ]


// Task:

// Remove qty 0

// Convert to total price per item

// Find grand total



const input=[
 {item:"pen", price:10, qty:2},
 {item:"book", price:50, qty:1},
 {item:"bag", price:500, qty:0}
]


const grandTotal=input.filter((item)=>{
    if(item.qty>0){
        return item;
    }
}).map((item)=>{
    return item.price*item.qty;
}).reduce((acc,item)=>{
    acc=acc+item;
    return acc;
},0);


console.log(grandTotal)
