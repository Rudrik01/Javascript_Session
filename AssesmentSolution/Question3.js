// JS: Implement API Retry Logic
// Write a function that takes a url and retry count, calls the API, and retries the request up to the given number of times if the API call fails.



async function fetchWithRetry(url, retries) {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();

    } catch (error) {

        if (retries === 0) {
            throw new Error("All retries failed");
        }

        console.log(`Retrying... Attempts left: ${retries}`);

        return fetchWithRetry(url, retries - 1);
    }
}


fetchWithRetry("url", 3)
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
