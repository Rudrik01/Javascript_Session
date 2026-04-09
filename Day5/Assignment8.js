// Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.
const output = Promise
    .resolve(5)
    .then((number) => number * 2)
    .then((value) => value + 20)
    .then((finalValue) => {
        console.log(finalValue);
    });
