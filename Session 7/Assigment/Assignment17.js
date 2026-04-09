// Q17. The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));


/*Expected Output:
Cleanup
Done
Explanation:
1. The Promise.resolve("Done") creates a resolved promise with the value "Done".
2. The finally block is executed next, logging
    "Cleanup" to the console. The return value from the finally block ("Modified?") is ignored.
3. The then block receives the original resolved value "Done" and logs it to the console.
Thus, the final output consists of two lines: "Cleanup" followed by "Done".
*/