// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
// Create an interface for a Product
// Create a variable that follows this interface
function task(user) {
    console.log("Its a Base User ".concat(user.id, ", ").concat(user.email));
}
var admin = {
    role: "admin",
    permissions: ["read", "Write", "Execute"],
    id: 1,
    email: "xyz@gmail.com"
};
var customer = {
    role: "customer",
    purchaseHistory: [1, 2, 3],
    id: 2,
    email: "customer@gmail.com"
};
task(admin);
task(customer);
