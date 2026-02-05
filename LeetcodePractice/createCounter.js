// 78.createCounter
// Write a function named createCounter that receives a number as a parameter.

// The function should return an object representing a counter, with the following 3 properties:

// a function named getValue that returns the current value of the counter
// a function named increment that increases the counter value by 1
// a function named decrement that decreases the counter value by 1
// Example 1
// const counter = createCounter(11);

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getValue()); // should print 14

// counter.decrement();

// console.log(counter.getValue()); // should print 13


function createCounter(initialValue) {

    let i = initialValue;

    return {
        increment() {
            i++;
        },
        getValue() {
            return i;
        },
        decrement(){
            i--;
        }
    };
}

export { createCounter };

