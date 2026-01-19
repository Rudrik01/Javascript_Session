const numbers=[-10, 20, 50, -5];


const processedNumbers =numbers.filter((number)=>{
    if(number>0){
        return number;
    }
}).map((number)=>number*2);


console.log(processedNumbers);