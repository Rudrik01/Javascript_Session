// Exercise 6 – Pass or Fail

// Input: [35, 67, 89, 20, 90]
// Task:

// Filter marks ≥ 40
// Expected Output: [67, 89, 90]


const input=[35,67,89,20,90];

const filtered=input.filter((number)=>{
    if(number>=40){
        return number;
    }
});

console.log(filtered);