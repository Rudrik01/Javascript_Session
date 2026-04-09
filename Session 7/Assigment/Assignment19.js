// Q19. Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

/*
Expected Output:
End
P1
P2
T1
T2 
Explanation:
1. "End" is logged first because it is a synchronous operation.
2. The first Promise.resolve().then(...) creates a microtask that logs "P1". This microtask is queued to run after the current synchronous code.
3. Inside the "P1" microtask, another setTimeout is scheduled to log "T2", which goes to the macrotask queue.
4. The second Promise.resolve().then(...) creates another microtask that logs "P2". This microtask is queued after the "P1" microtask.
5. After all synchronous code is executed, the microtask queue is processed, logging "P1" first, followed by "P2".
6. Finally, the macrotask queue is processed, logging "T1" first (from the initial setTimeout), followed by "T2" (from the setTimeout inside the "P1" microtask).
Thus, the final order of logs is End, P1, P2, T1, T2.


*/