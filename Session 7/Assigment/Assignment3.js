// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

/*
Output Prediction: "Error Occurred"
Explanation: In this code,we create a promise that is immediately rejected so it goes to the catch block and logs the error message."Error Occurred".
*/