// ⚡ QUESTION 2: Promise.race with Timeout
// JS: Implement Fetch with Timeout

// Write a function fetchWithTimeout(url, timeout) that:

// Fetches data from a URL
// Times out if request takes longer than specified milliseconds
// Returns data if successful within timeout
// Throws "Request timeout" error if timeout is exceeded
// Uses Promise.race
// Example:

// Succeeds within timeout
// await fetchWithTimeout('https://api.example.com/fast', 5000);
// Returns: { data: ... }

//  Times out
// await fetchWithTimeout('https://api.example.com/slow', 1000);
// Throws: Error('Request timeout')
// Constraints:

// Must use Promise.race
// Use async/await
// Create a timeout promise
// Handle both success and timeout cases
// Proper error handling with try-catch
// Succeeds within timeout



async function fetchWithTimeout(url, timeout) {

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timeout"));
        }, timeout);
    });

    const fetchPromise = fetch(url).then(res => {
        if (!res.ok) {
            throw new Error("Request failed");
        }
        return res.json(); 
    });

    return Promise.race([
        fetchPromise,
        timeoutPromise
    ]);
}

await fetchWithTimeout('https://api.example.com/fast', 5000);
// Returns: { data: ... }

// Times out
await fetchWithTimeout('https://api.example.com/slow', 1000);
// Throws: Error('Request timeout')