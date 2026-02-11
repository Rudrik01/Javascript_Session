// Assignment 8: Typed Functions
// Write a function with required and optional parameters
// Define return types explicitly
// Create a small utility function that would exist in a real project
// Write a function with one required and one optional parameter
// Call it with and without the optional argument
// How does TypeScript enforce correctness here?

// Utility function: format a user's order message
function Order(product: string, quantity?: number): string {
  if (quantity) {
    return `You ordered ${quantity} ${product}(s).`;
  }
  return `You ordered ${product}.`;
}

// Calling with optional argument
console.log(Order("Laptop", 2));

// Calling without optional argument
console.log(Order("Mouse"));



/*
TypeScript enforces correctness by checking the function inputs before running the code. The required parameter must be provided, or TypeScript will show an error. The optional parameter can be given or skipped, but if you provide it, it must be the correct type. This helps find errors early and keeps the code safer.

*/