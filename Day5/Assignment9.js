// Create a function wait(ms) that returns a Promise and resolves after ms milliseconds using setTimeout.
// Use it to log "2 seconds passed" after 2000 ms.

function wait(time){
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log(`${time} milliseconds passed`);
            resolve();
        }, time);

    });
}

async function run(){
    const result = await wait(1000);
}

run();


