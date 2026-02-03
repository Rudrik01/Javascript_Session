// ## Task 1: Predict Output of Async Code


// ### Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.


// ### Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop


// ### Code Block 1: Basic Async
// `javascript
// console.log("1");


// setTimeout(function() {
//  console.log("2");
// }, 0);


// Promise.resolve().then(function() {
//  console.log("3");
// });


// console.log("4");


console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


Promise.resolve().then(function() {
 console.log("3");
});


console.log("4");


/**Your Prediction (order):**
```
// Write the order you expect: 1,4,3,2
```


**Actual Output:**
```
// Run and write the actual order 
// 
**Explanation:**
The synchronous code runs first, so "1" and "4" are logged immediately. The Promise resolution is a microtask, which runs after the current stack is cleared but before any macrotasks (like setTimeout). Therefore, "3" is logged next. Finally, the setTimeout callback runs, logging "2". Hence, the order is 1, 4, 3, 2.



*/

