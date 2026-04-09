// ✅ Q2 — Safer Optional Data

// Write a function:

// getUserCity(user)


// Return "Unknown" if city is missing.

// Example Input:
// {
//  name:"Alex",
//  address:{ city:"Mumbai" }
// }


// OR

// {
//  name:"Bob"
// }

// Must Use:

// ✔ Optional chaining
// ✔ Nullish coalescing

interface Address{
    city?:string;
}
interface User{
    name:string;
    address?:Address;
    
}
const input:User[]=[
    {
        name:"Alex",
        address:{city:"Mumbai"}
    },
    {
        name:"BoB"
    }
    

];

function getUserCity(users:User[]){
    return users.map(user=>user.address?.city ?? "unknown");
}


console.log(getUserCity(input));