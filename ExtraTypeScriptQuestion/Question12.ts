// ✅ Q12 — Typed Retry Logic

// Write:

// retry<T>(fn:()=>Promise<T>, retries:number):Promise<T>


// Behavior:

// Retry until success

// Throw error after max retries

// Tests:

// ✔ Generics
// ✔ Async
// ✔ Error typing

// VERY high-value question.


async function fetchData<T>():Promise<T>{
    try{
        const response=await fetch("https://example.com");
        if(!response.ok){
            throw new Error("Error in fetch the data");
        }
        const data=await response.json();
        return data;

    }
    catch(err:unknown){
        throw err;

    }
}

async function retry<T>(fn:()=>Promise<T>, retries:number):Promise<T>{
    let lastError:unknown
    for(let attempt=0;attempt<=retries;attempt++){
        try{
            return await fn();
        }
        catch(error){
            lastError=error;

            if(attempt===retries){
                throw lastError;
            }
        }
    }
    throw lastError;

}


retry(fetchData,3);
