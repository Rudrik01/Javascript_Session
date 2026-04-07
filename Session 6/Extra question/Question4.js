// Q4 – Coding Task: Convert Collection

// Task

// Convert an HTMLCollection into an array

// Use .map() to log each element’s text

// 👉 Explain why conversion is required


const items=document.getElementsByClassName("item");

const elementTexts=[...items].map(item=>item.textContent);
console.log(elementTexts);

//Explanation:
// The conversion is required because HTMLCollection does not have array methods like .map(). By converting it into an array using the spread operator [...items], we can then use array methods to manipulate or access the elements easily.