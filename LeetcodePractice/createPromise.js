// 79.createPromise
// Write a function named createPromise that receives a number as a parameter.

// The function should return a promise that resolves to:

// the string It's positive! if the number is positive
// the string It's negative! if the number is negative
// Example 1
// Input
// number

// =
// 21
// Output
// a Promise that resolves with the value below:
// "It's positive!"
// Example 2
// Input
// number

// =
// -11
// Output
// a Promise that resolves with the value below:
// "It's negative!"



function createPromise(number) {
    const promise=Promise.resolve(number).then((number)=>{
        if(number>0){
            return "It's positive!";
        }else if(number<0){
            return "It's negative!";
        }
    });
    return promise;
}

export { createPromise };
