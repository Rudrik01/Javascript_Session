// ⭐ TypeScript Question 6 (Readonly Trap)

// Create a type:

// User


// Where:

// ✅ id cannot be changed
// ✅ name CAN be updated

// Then write a function that updates the name.



interface User{
    readonly id:number;
    name:string;
}


function updateUserName(user: User, newName: string): User {
    user.name = newName;
    return user;
}
