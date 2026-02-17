// ⭐ Mixed Question 8 (Filtering + Async)

// API:

// fetchUsers(): Promise<
//  {id:number, active:boolean}[]
// >

// Task:

// Return ONLY active user IDs.

// Promise<number[]>


// ⚠️ Tests:

// typing

// mapping

// async flow

type User={
    id:number;
    active:boolean;
}


fetchUsers(): Promise<{id:number, active:boolean}[]>


async function activeUsers():Promise<number[]>{
    const data:User[]=await fetchUser();
    const activeUser=data.reduce((acc,user)=>{
        if(user.active){
            acc.push(   );
        }
        return acc;
    },[]);
    return data;

  

}
