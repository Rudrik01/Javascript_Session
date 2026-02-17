// ⚡ QUESTION 1: Sequential vs Parallel API Calls
// JS: Fetch Data Sequentially and In Parallel

// Write TWO functions:

// fetchSequential(urls) - Fetches URLs one after another (sequential)
// fetchParallel(urls) - Fetches all URLs at once (parallel)
// Both should:

// Return an array of results in the same order as input URLs
// Use async/await
// Handle errors (if one fails, continue with others)
// Measure and log the time taken
// Example:

// const urls = [
//   'https://api.example.com/user/1',
//   'https://api.example.com/user/2',
//   'https://api.example.com/user/3'
// ];

// // Sequential
// await fetchSequential(urls); // Takes 3 seconds (1+1+1)
// // Output: [{user1}, {user2}, {user3}]

// // Parallel  
// await fetchParallel(urls); // Takes 1 second (all at once)
// // Output: [{user1}, {user2}, {user3}]
// Constraints:

// Use async/await (required)
// Use Promise.all for parallel version
// Handle errors without stopping execution
// Must preserve order of results
// Log execution time for both


const urls = [
  'https://api.example.com/user/1',
  'https://api.example.com/user/2',
  'https://api.example.com/user/3'
];


async function fetchSequential(urls){
    try{
        const result=[];
        for(url of urls){
            const temp=await fetch(url).then(res=>res.json());

            result.push(temp);
        }
        return result;
    }
}

// Sequential




await fetchSequential(urls); // Takes 3 seconds (1+1+1)
// Output: [{user1}, {user2}, {user3}]


async function fetchParallel(urls){
 

    const result=Promise.all(urls.map(url=>fetch(url)));
    return result;
}
// Parallel  
await fetchParallel(urls); // Takes 1 second (all at once)
// Output: [{user1}, {user2}, {user3}]