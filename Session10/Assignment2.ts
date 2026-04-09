// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

interface UserCredentials {
    id: number;
    email: string;
}
function activateUser<T extends {isActive:boolean}>(value:T){
    console.log(value.isActive);
}

function setUserCredentials<T extends UserCredentials>(user: T): string {
    return `User ${user.id} updated with email ${user.email}`;
}