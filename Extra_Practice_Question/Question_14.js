// Exercise 14 – Unique Values

// Input: [1,1,2,3,3,4]
// Task:

// Use reduce to remove duplicates
// Expected Output: [1,2,3,4]



const input =[1,1,2,3,3,4];

const processedArray=input.reduce((acc,num)=>{
   
    if(!acc.includes(num)){
        acc.push(num);
       
    }
     return acc;
},[]);

console.log(processedArray)