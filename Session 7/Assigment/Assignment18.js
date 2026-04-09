// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;

/*
Expected Output:
undefined
10
Explanation:
1. The first console.log(a); logs undefined because of variable hoisting. In JavaScript, variable declarations (using var) are hoisted to the top of their scope, but their assignments are not. Therefore, at the time of the first log, a is declared but not yet assigned a value, resulting in undefined.
2. The Promise.resolve().then(...) creates a microtask that will execute after the current synchronous code has finished executing. By the time this microtask runs, the assignment a = 10; has already occurred.
3. Thus, when the microtask executes and logs the value of a, it logs 10, which is the value assigned to a before the microtask runs.
*/
