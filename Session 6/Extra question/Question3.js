// Q3 – Output Prediction
// const items = document.getElementsByClassName("item");
// console.log(items.length);

// document.body.innerHTML += `<li class="item">Orange</li>`;

// console.log(items.length); // ?


// Task

// Predict both outputs

// Explain live vs static collections



const items = document.getElementsByClassName("item");
console.log(items.length);

document.body.innerHTML += `<li class="item">Orange</li>`;

console.log(items.length); // ?


/*
Output Prediction:
First Output: 3

Second Output: 4

Q)Explain live vs Static collections
-->Live collections are automatically updated when the underlying document changes, while static collections remain unchanged after they are created. In this case, getElementsByClassName returns a live HTMLCollection, so when we add a new item to the document, the length of the collection updates to reflect the change.

*/
