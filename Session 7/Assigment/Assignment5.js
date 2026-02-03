// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));


/*
Output Prediction: 20
Explanation: In this code,we create a promise that resolves with the value 10.Then,we chain two then methods.First, we multiply the number by 2,resulting in 20.Then,we log the result to the console.Therefore,the final output will be 20.
 */