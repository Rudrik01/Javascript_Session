// ## Task 2: setTimeout Examples


// ### Objective
// Complete and understand various setTimeout scenarios.


// ### Exercise 1: Basic setTimeout


// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.


// ```javascript
// // TODO: Implement countWithDelay function
// function countWithDelay() {
//  // Your code here
//  // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
// }


// countWithDelay();
// ```


// **Expected Output:**

// 1  // after 1 second
// 2  // after 2 seconds
// 3  // after 3 seconds
// 4  // after 4 seconds
// 5  // after 5 seconds


// TODO: Implement countWithDelay function

function countWithDelay() {
 // Your code here
 // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
    for(let i =1;i<=5;i++){
        setTimeout(()=>{
            // console.log(i);
            console.log(`${i} (after ${i}s),`);

        },5000);
        // console.log(` (after ${i}s),`);  Mistake that i have made the explanation is given below
    }

}

countWithDelay();


/*
I eventually first used the commented approach but then I found that the first the synchronous code will execute full then async code will run so to achieved to given expected output the above approach so be used to make it asynchornus.

*/