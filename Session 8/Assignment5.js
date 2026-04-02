// ### Code Block 5: Async/Await


// ```javascript
// console.log("Start");


// async function asyncFunction() {
//  console.log("Async 1");
//   await Promise.resolve();
//  console.log("Async 2");
// }


// asyncFunction();


// Promise.resolve().then(function() {
//  console.log("Promise 1");
// });


// setTimeout(function() {
//  console.log("Timeout");
// }, 0);


// console.log("End");
// ```


console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");


/**Your Prediction (order):**
```
// Write the order you expect
Start
Async 1
End
Async 2
Promise 1
Timeout

**Actual Output:**
Start
Async 1
End
Async 2
Promise 1
Timeout


**Explanation:**
The synchronous code runs first, so "Start" and "Async 1" are logged immediately. The `await` in the async function causes the function to pause, allowing the next synchronous code to run, which logs "End". After that, the microtasks are processed: the continuation of the async function logs "Async 2", followed by the Promise resolution logging "Promise 1". Finally, the macrotask from setTimeout runs, logging "Timeout". Hence, the order is Start, Async 1, End, Async 2, Promise 1, Timeout.


*/
