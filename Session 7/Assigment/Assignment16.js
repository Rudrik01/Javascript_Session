// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");




/*
Expected Output:
C
A
D
B
Explanation:
1. The first console.log("C") is executed immediately, logging
    "C" to the console.
2. The async function foo() is called next. Inside foo(), console.log("A") is executed, logging "A" to the console.
3. The await Promise.resolve() causes the function to pause and yield control back to the main thread. This means that the next line of code after the foo() call will execute before the rest of foo() continues.
4. The console.log("D") is executed next, logging "D" to the console.
5. After the main thread is free, the promise from await resolves, and the function foo() resumes execution, logging "B" to the console.
Thus, the final order of logs is C, A, D, B.
*/
