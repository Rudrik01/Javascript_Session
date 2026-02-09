// Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.
// Function to simulate a task
// Function to simulate a task
function simulateTask(taskName, delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(taskName);
        }, delayTime);
    });
}

async function runSequential() {

    const startTime = Date.now();

    const task1 = await simulateTask("Task 1", 1000);
    const task2 = await simulateTask("Task 2", 2000);
    const task3 = await simulateTask("Task 3", 3000);

    const endTime = Date.now();

    console.log(task1, task2, task3);
    console.log(`Sequential time: ${endTime - startTime} ms`);
}



async function runParallel() {

    const startTime = Date.now();

    const results = await Promise.all([
        simulateTask("Task 1", 1000),
        simulateTask("Task 2", 2000),
        simulateTask("Task 3", 3000)
    ]);

    const endTime = Date.now();

    console.log(...results);
    console.log(`Parallel time: ${endTime - startTime} ms`);
}



async function run() {
    await runSequential();
    await runParallel();
}

run();
