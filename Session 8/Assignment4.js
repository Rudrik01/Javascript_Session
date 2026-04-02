// ### Code Block 4: Complex Async Chain


// ```javascript
// console.log("1");


// setTimeout(function() {
//  console.log("2");
// }, 0);


// queueMicrotask(function() {
//  console.log("3");
// });


// Promise.resolve().then(function() {
//  console.log("4");
//   queueMicrotask(function() {
//    console.log("5");
//  });
// });


// setTimeout(function() {
//  console.log("6");
// }, 0);


// console.log("7");
// ```


console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");


/**Your Prediction (order):**
```
// Write the order you expect
1
7
3
4
5
2
6

**Actual Output:**
```
// Run and write the actual order
1
7
3
4
5
2
6


**Explanation:**
The synchronous code runs first, so "1" and "7" are logged immediately. Next, the queueMicrotask callback is executed, logging "3". Then, the Promise resolution is a microtask, which runs after the current stack is cleared but before any macrotasks (like setTimeout). Therefore, "4" is logged next, followed by the nested queueMicrotask which logs "5". Finally, the setTimeout callbacks run in order, logging "2" and then "6". Hence, the order is 1, 7, 3, 4, 5, 2, 6.

*/
