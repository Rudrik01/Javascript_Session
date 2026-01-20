// Exercise 8 – Pagination Advanced

// Input: [1,2,3,4,5,6,7,8,9,10]
// Task:

// Write logic for Page 3 with pageSize 3 using .slice()
// Expected Output: [7,8,9]


const input = [1,2,3,4,5,6,7,8,9,10];

const page=3;
const pageSize=3;


const startIndex=(page-1)*pageSize;


const endIndex =startIndex+pageSize;


const PageThree= input.slice(startIndex,endIndex);

console.log(PageThree);