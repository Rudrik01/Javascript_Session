// Assignment 7: Enums
// Create an enum for payment states (INITIATED, SUCCESS, FAILED)
// Write a function that accepts only this enum
// Try passing an invalid value and observe the error
// Why enums are better than magic strings?
var PaymentState;
(function (PaymentState) {
    PaymentState["Initiated"] = "INITIATED";
    PaymentState["Success"] = "SUCCESS";
    PaymentState["Failed"] = "FAILED";
})(PaymentState || (PaymentState = {}));
function PaymentProcessor(payment) {
    console.log(`Payment Status: ${payment}`);
}
PaymentProcessor(PaymentState.Success);
PaymentProcessor(PaymentState.xyz);
