// Q10. Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));



/*  
Expected Output:Fail
Recovered
Explanation: The code creates a Promise that immediately rejects with the value "Fail". The catch method is used to handle the rejection, logging the error message "Fail" to the console. After logging, it returns the string "Recovered". This return value is then passed to the next then method, which logs "Recovered" to the console. Thus, the final output consists of two lines: "Fail" followed by "Recovered".
 */