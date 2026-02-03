// ### Code Block 3: Multiple Microtasks


// ```javascript
// console.log("A");


// Promise.resolve().then(function() {
//  console.log("B");
//   Promise.resolve().then(function() {
//    console.log("C");
//  });
//   console.log("D");
// });


// Promise.resolve().then(function() {
//  console.log("E");
// });


// setTimeout(function() {
//  console.log("F");
// }, 0);


// console.log("G");
// ```

console.log("A");


Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});


Promise.resolve().then(function() {
 console.log("E");
});


setTimeout(function() {
 console.log("F");
}, 0);


console.log("G");

/**Your Prediction (order):**
```
// Write the order you expect
A
G
B
D
E
C
F


**Actual Output:**
A
G
B
D
E
C
F


**Explanation:
The synchronous code runs first, so "A" and "G" are logged immediately. Next, the Promise resolutions are microtasks, which run after the current stack is cleared but before any macrotasks (like setTimeout). Therefore, "B" is logged next, followed by "D". Inside the first Promise's then, another Promise resolution occurs, which is also a microtask, so "C" is logged next. After that, the second Promise resolution logs "E". Finally, the setTimeout callback runs, logging "F". Hence, the order is A, G, B, D, E, C, F.

**/