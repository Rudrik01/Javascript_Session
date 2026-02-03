// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));


/*
Expected Output:
Caught: Error 1
Explanation:
In this code, we are using Promise.all to handle an array of promises. Promise.all waits for all the promises in the array to either resolve or for any one of them to reject. If all promises resolve, it returns an array of their results. However, if any promise rejects, Promise.all immediately rejects with that error.

In our case, the second promise in the array rejects with the message "Error 1". As a result, Promise.all does not wait for the other promises to resolve and immediately goes to the catch block, logging
"Caught: Error 1" to the console. Thus, the final output is "Caught: Error 1".
*/