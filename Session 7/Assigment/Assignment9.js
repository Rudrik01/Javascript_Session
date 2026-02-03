// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

/*
Output Prediction:
5
10
Explanation: In this code, we create a promise that resolves with the value 5. The first then method logs this value (5) to the console and returns val + 5, which is 10. The second then method receives this returned value (10) and logs it to the console. Therefore, the final output will be 5 followed by 10.
 */