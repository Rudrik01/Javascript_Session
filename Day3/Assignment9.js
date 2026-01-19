const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];


const totalCost=inventory.filter((item)=>{
    if(item.stock>0){
        return item;
    }
}).map((item)=>{
    return item.price*item.stock;
}).reduce((acc,value)=>{
    acc+=value
    return acc;
});

console.log(totalCost);