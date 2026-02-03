// ### Code Block 2: Nested Async


// ```javascript
// console.log("Start");


// setTimeout(function() {
//  console.log("Timeout 1");
//   Promise.resolve().then(function() {
//    console.log("Promise 1");
//  });
// }, 0);


// Promise.resolve().then(function() {
//  console.log("Promise 2");
//   setTimeout(function() {
//    console.log("Timeout 2");
//  }, 0);
// });


// console.log("End");
// ```


console.log("Start");


setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);


Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});


console.log("End");

/**Your Prediction (order):**
```
// Write the order you expect
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
```

**Actual Output:**
```
// Run and write the actual order
```
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2



**Explanation:*
The synchronous code runs first, so "Start" and "End" are logged immediately. Next, the Promise resolution is a microtask, which runs after the current stack is cleared but before any macrotasks (like setTimeout). Therefore, "Promise 2" is logged next. Then, the first setTimeout callback runs, logging "Timeout 1". Inside that callback, another Promise resolution occurs, which is also a microtask, so "Promise 1" is logged next. Finally, the second setTimeout callback runs, logging "Timeout 2". Hence, the order is Start, End, Promise 2, Timeout 1, Promise 1, Timeout 2.
*/

