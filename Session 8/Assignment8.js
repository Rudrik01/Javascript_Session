// ### Exercise 3: setTimeout with Clear


// **Task:** Create a countdown timer that counts from 10 to 0, then stops.



// TODO: Implement countdown function
/*
function countdown(start) {
    Your code here
    Should log numbers from start to 0, with 1 second between each
    Should stop at 0
}

countdown(10);

*/

// Expected output:
// 10 (immediately)
// 9  (after 1 second)
// 8  (after 2 seconds)
// ...
// 0  (after 10 seconds)






// TODO: Implement countdown function

function countdown(start) {
    let current = start;

    const timer = setTimeout(function run() {
        console.log(current);
        current--;

        if (current >= 0) {
            setTimeout(run, 1000); 
        } else {
            clearTimeout(timer); 
        }
    }, 0);
}


countdown(10);

