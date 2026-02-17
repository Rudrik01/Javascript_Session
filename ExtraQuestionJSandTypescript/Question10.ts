// ⭐ Question 10 (Async Loop Trap)

// Given:

// fetchScore(id:number)


// And:

// ids:number[]

// Task:

// Fetch ALL scores and return the highest.



async function getHighestScore(ids: number[]): Promise<number> {

    const promises = ids.map(id => fetchScore(id));

    const scores = await Promise.all(promises);

    return Math.max(...scores);
}
