// Assignment 5: Type Aliases
// Create reusable aliases for union and intersection types
// Refactor earlier assignments to use these aliases
// Observe how readability improves
// Create a type alias for string | number
// Use it in two variables
// How does this improve readability?




type ID = string | number;


let userId: ID = 101;
let orderId: ID = "ORD-202";



/*

How does this improve readability?

Reduces repetition: You don’t have to write string | number again and again.

Clear meaning: A name like ID quickly tells what the value is for.

Better consistency: Using the same alias keeps the code uniform.

Easy to update: If the type changes, you only modify it in one place.


*/