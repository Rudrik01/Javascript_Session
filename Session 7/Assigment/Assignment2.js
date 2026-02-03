// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);


/**
 Output Prediction:
 1
 3
 2


 Explantion:The browser read code from top to bottom.So first it will log 1 to the console.then it encounter Promise.resolve().then which is microtask so it will to to microtask question
 */