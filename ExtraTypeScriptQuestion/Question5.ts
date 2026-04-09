// ✅ Q5 — Typed API Response

// Define a reusable API response type:

// {
//  data: ?
//  success: boolean
//  error?: string
// }


// Now create a function:

// fetchUsers(): Promise<ApiResponse<User[]>>


// No implementation needed — focus on correct typing.

// 👉 Tests:

// Generics

// Promise typing

// Optional fields


interface ApiResponse<T>{
    data?:T;
    success:Boolean;
    error?:T;

}


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

async function fetchUsers(user:User[]):Promise<ApiResponse<User[]>>{
    return {
        data:user,
        success:true,   
    }
}


fetchUsers(input).then(response=>console.log(response));