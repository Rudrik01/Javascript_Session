//  Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().
async function tossCoin(){
    return new Promise((resolve, reject) => {

        const random = Math.random();

        if(random > 0.5){
            resolve("Heads");
        }else{
            reject("Tails");
        }

    });
}

tossCoin()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

