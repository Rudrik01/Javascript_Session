// ⭐ Async Question 1 (VERY REALISTIC)
// 🔥 API Failure Handling

// You are given an API:

// fetchData(): Promise<string>


// But it randomly fails.

// Task:

// Write a function:

// async function fetchWithFallback():Promise<string>

// Behavior:

// 1️⃣ Try calling fetchData()
// 2️⃣ If it fails → call it AGAIN immediately
// 3️⃣ If it fails again → return:

// "Fallback Data"

// Rules:

// ✅ Use async/await
// ❌ Do NOT use recursion
// ❌ Do NOT use Promise.all

// 👉 Interviewers are testing:

// try/catch

// retry thinking

// control flow

// VERY COMMON.


let retry=1;
async function fetchWithFallback():Promise<string>{
    try{
        return await fetchData();

    }catch(){
        //mistake
        // if(retry){
        //     fetchWithFallback();
        //     retry--;
        // }
        // throw err;

        try{
            return await fetchData();
        }catch{
            return "FallBack Data";
        }
    }
}