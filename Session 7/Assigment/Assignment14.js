// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();


/*
Expected Output: undefined
Explanation: In this code, we have an object player with a method updateScore that uses setTimeout to log the score property after 100 milliseconds. However, the function passed to setTimeout is a regular function, which means that its this context does not refer to the player object. Instead, it refers to the global context (or undefined in strict mode). Since there is no score property in the global context, the output will be undefined.
To fix this issue, we can use an arrow function inside setTimeout, which captures the this context of the surrounding lexical scope (the player object). Here’s the corrected version:
const player = {
    score: 50,
    updateScore() {
        setTimeout(() => {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();
With this change, the output will be 50 as expected.


*/