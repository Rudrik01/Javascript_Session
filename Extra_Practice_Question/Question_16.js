// Exercise 16 – Immutable Add

// Input:

// const user = { name:"Alex", age:20 }


// Task:

// Create new object with city:"Mumbai" without mutation



const user={name:"Alex",age:20};

const newUser={
    ...user,
    city:"mumbai",

};

console.log(newUser);



