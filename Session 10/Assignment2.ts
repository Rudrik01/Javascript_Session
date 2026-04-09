// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?


// Create a function that accepts any and performs operations without checks
function procesAny(input:any){
    console.log(input.toUpperCase()); // This will work if input is a string, but can cause runtime errors if it's not.

}
// Create the same function using unknown and add proper type guards

function procesUnknown(input:unknown){
    if(typeof input=="string"){
        console.log(input.toUpperCase());
    }else if(typeof input=="number"){
        console.log("Hurrah its a Number");
    }
}




/*
Compare the compiler behavior and runtime safety
==>any lets you do anything with a variable, and TypeScript will not show errors. This is risky because it can cause runtime crashes.

unknown is safer. It forces you to check the type before using the value, which helps prevent mistakes.

In short: any is flexible but unsafe, while unknown is strict and more reliable.


*/

// Create one variable using any

const ip:any="test string";

// Create another variable using unknown

const unknownTest:unknown=2;


// Try calling methods directly on both

procesAny(ip);

// procesAny(unknownTest); // Give error as the number don't have any toUpperCase method


procesUnknown(ip);  
procesUnknown(unknownTest);




/*

Which one forces you to write safer code?
unknown forces you to write safer code because it requires type checking before using a value, helping prevent runtime errors.


*/