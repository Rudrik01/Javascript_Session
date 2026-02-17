// ✅ Q3 — Generic Identity Function

// Create a generic function:

// identity<T>(value:T):T


// Test it with:

// string

// number

// object

// 👉 If you understand generics, this is trivial.
// If not — this is exam gold.


function identity<T>(value:T):T{
    return value;
}


console.log(identity("Hey there"));

console.log(identity(23));

console.log(identity({name:"Rudrik"}));
