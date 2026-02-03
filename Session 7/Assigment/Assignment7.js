// Q7. Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


/**
Explanation: In this code,we first log "Start" to the console.Then,we set a timeout with a delay of 0 milliseconds,which means the callback will be placed in the task queue to be executed after the current call stack is empty.Next,we create a resolved promise and attach a then method to it,which places its callback in the microtask queue to be executed after the current call stack but before the task queue.Next,we log "End" to the console.

The event loop first processes the synchronous code,logging "Start" and "End".Then,it processes the microtask queue,logging "Promise".Finally,it processes the task queue,logging "Timeout".Therefore,the final output will be:
Start
End
Promise
Timeout
 */