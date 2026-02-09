// Assignment : TypeScript Basics
// Create a variable prices as an array of numbers
// Write a function calculateTotal that:
// Accepts a number array
// Returns the total sum
// Write another function that:
// Accepts two numbers
// Returns a string if the result is greater than 100
// Think About:
// What happens if you pass a string?
// Which errors are caught before running the code?
var prices = [10, 20, 30, 40, 50];
function calculateTotal(prices) {
    var total = prices.reduce(function (sum, price) { return sum + price; }, 0);
    return total;
}
function check(num1, num2) {
    var result = num1 + num2;
    if (result > 100) {
        return "The result is greater than 100";
    }
    else {
        return "The result is less than or equal to 100";
    }
}
;
console.log(calculateTotal(prices));
console.log(check(60, 50));
