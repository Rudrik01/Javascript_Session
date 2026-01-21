// Exercise 20 – Search System

// Input:

// ["Laptop","Mobile","Mouse","Monitor"]


// Task:

// Write function search("mo") → should return
// ["Mobile","Mouse","Monitor"]



const input =["Laptop","Mobile","Mouse","Monitor"];

function search(key){
    const result=input.filter((item)=>{
        let word=item.toLowerCase();
        if(word.includes(key)){
            return item;
        }
    });
    return result;
};

console.log(search("mo"));


