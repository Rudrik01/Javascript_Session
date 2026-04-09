// ✅ Q1 — Strong Typing Transformation

// Write a function:

// groupByRole(users)

// Input:
// [
//  {name:"Alex", role:"admin"},
//  {name:"Bob", role:"user"},
//  {name:"John", role:"admin"}
// ]

// Output:
// {
//  admin:["Alex","John"],
//  user:["Bob"]
// }

// Requirements:

// ✔ Use TypeScript interfaces
// ✔ No any
// ✔ Return type must be inferred correctly
// ✔ Use reduce

// 👉 Tests:

// Object typing

// Index signatures

// Reduce

// Inference


interface User{
    name:string;
    role:"admin"|"user";
}
const input:User[]=[
    {
        name:"Alex",
        role:"admin"
    },
    {
        name:"Bob",
        role:"user"
    },
    {
        name:"John", 
        role:"admin"
    }

];

function groupByRole(users:User[]){
    return users.reduce<Record<string,string[]>>((acc,curr)=>{
        if(!acc[curr.role]){
            acc[curr.role]=[]
        }
        acc[curr.role].push(curr.name);
        return acc;
    },{})
}


console.log(groupByRole(input));
