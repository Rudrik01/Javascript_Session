// Exercise 12 – Word Counter

// Input: "hello world hello js"
// Task:

// Output object with frequency
// Expected Output:
// { hello: 2, world:1, js:1 }

let input="hello world hello js";
input=input.split(" ");

const wordCount=input.reduce((acc,word)=>{
    if(acc[word]){
        acc[word]++;
    }
    else{
        acc[word]=1
    }
    return acc;

},{});

console.log(wordCount);

