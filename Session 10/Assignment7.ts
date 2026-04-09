// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?


enum PaymentState{
    Initiated='INITIATED',
    Success='SUCCESS',
    Failed='FAILED',
}

function PaymentProcessor(payment:PaymentState){
    console.log(`Payment Status: ${payment}`);
}


PaymentProcessor(PaymentState.Success);

PaymentProcessor(PaymentState.xyz); //  error TS2339: Property 'xyz' does not exist on type 'typeof PaymentState'.4


/*

Why enums are better than magic strings?

Enums are better than magic strings because they provide type safety. In your example, PaymentState.xyz gives a compile-time error, which prevents you from using an invalid value. If you were using plain strings like "SUCCESS" or "FAILED", a typo would not be caught and could cause bugs.

Enums also improve readability since the values are clearly defined, and they make the code easier to maintain because all possible states are stored in one place.
In short: Enums reduce mistakes, catch errors early, and make your code more reliable than using random strings.

*/
