// ✅ Q4 — Remove Duplicates with Generics

// Write a generic function:

// removeDuplicates<T>(arr:T[]):T[]


// Constraint:

// 👉 It should work for:

// number[]
// string[]
// boolean[]


// ⚠️ DO NOT use any.

// Bonus:
// Make it work for objects using a key selector.


function removeDuplicates<T>(inputs:T[]):T[]{
    return [...new Set(inputs)];
}


const ip1:number[]=[1,2,3,4,5];
const ip2:string[]=["a","b","c"];
const ip3:boolean[]=[true,false,true,false,false];

console.log(removeDuplicates(ip1));
console.log(removeDuplicates(ip2));
console.log(removeDuplicates(ip3));