// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

/*
Expected Output:
Caught Error
10
Explanation:
1. The Promise.resolve(1) creates a resolved promise with the value 1.
2. The first then block attempts to throw a new Error with the message "Invalid". This causes the promise chain to reject, and control is passed to the nearest catch block.
3. The catch block catches the error, logs "Caught Error" to the console, and returns the value 10.
4. The next then block receives the value 10 returned from the catch block and logs it to the console.
Thus, the final output consists of two lines: "Caught Error" followed by 10.

*/