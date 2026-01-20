// Exercise 7 – Name Lengths

// Input: ["ram", "shyam", "mohan"]
// Task:

// Map to length of each name
// Expected Output: [3, 5, 5]


const input=["ram","shyam","mohan"];


const nameLengths=input.map((name)=>{
    return name.length;
});


console.log(nameLengths);