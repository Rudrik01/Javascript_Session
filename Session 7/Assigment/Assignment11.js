// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');


/*
Expected Output:
A
E
C
D
B
Explanation:
1. 'A' is logged first as it is a synchronous operation.
2. The setTimeout with 'B' is scheduled to run after 0 milliseconds, but it goes to the macrotask queue.
3. The Promise.resolve().then() with 'C' is a microtask and will execute after the current synchronous code but before any macrotasks.
4. 'E' is logged next as it is also synchronous.
5. After the synchronous code, the microtask queue is processed, logging
    'C' first, then scheduling another microtask for 'D'.
6. 'D' is logged next as it is the next microtask.
7. Finally, the macrotask queue is processed, logging 'B'.
Thus, the final order of logs is A, E, C, D, B.

 */