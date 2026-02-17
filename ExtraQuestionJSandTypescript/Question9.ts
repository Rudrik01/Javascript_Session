// ⭐ Mixed Question 9 (Error Handling — VERY HIGH SIGNAL)

// API:

// fetchProfile():Promise<{name:string}>

// Task:

// If API fails → return:

// {name:"Guest"}


// WITHOUT throwing error.

// 👉 Tests production mindset.

// Senior devs ALWAYS handle fallback.


async function fetchWithFallback(): Promise<{ name: string }> {
    try {
        return await fetchProfile();
    } catch {
        return { name: "Guest" };
    }
}
