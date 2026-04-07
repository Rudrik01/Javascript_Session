// JS: Async Data Aggregation Using Promises
// You are required to fetch related data from multiple APIs and create a summary.
// Steps:
// Fetch a user
// Fetch posts for that user
// Fetch comments for one of the posts
// Combine the results into a single summary object

// Example:

// summary: {
    // user: "Leanne Graham",
    // postCount: 10,
    // commentCount: 5
// }

// Contraints:
// Use Promise.all
// Use async/await
// Handle errors properly
// Return or log a summary object


async function getUserSummary() {
   

    try {
      
        const userResponse = await fetch("user");
        if (!userResponse.ok) {
            throw new Error("Failed to fetch user");
        }

        const user = await userResponse.json();

        const postsPromise = fetch("postCount");
        const commentsPromise = fetch("CommentCount");

        const [postsResponse, commentsResponse] = await Promise.all([
            postsPromise,
            commentsPromise
        ]);

        if (!postsResponse.ok || !commentsResponse.ok) {
            throw new Error("Failed to fetch posts or comments");
        }

        const posts = await postsResponse.json();
        const comments = await commentsResponse.json();

        const summary = {
            user: user.name,
            postCount: posts.length,
            commentCount: comments.length
        };

        console.log(summary);
        return summary;

    } catch (error) {
        console.error("Error while aggregating data:", error.message);
    }
}

getUserSummary();



/*
First we have to fetch user from the url and then using user Id we have to fetch commentCount and postCount so this the solution for the Question1

*/