const itemCost=[100, 200, 50];



const totalCost=itemCost.reduce((acc,cost)=>{
    acc+=cost;
    return acc;
},0);

console.log(totalCost);