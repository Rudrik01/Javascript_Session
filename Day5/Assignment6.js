//  Create three functions step1, step2, and step3, each accepting a callback and completing after 1 second using setTimeout.
// Call them in sequence using nested callbacks.
// Log "All steps finished" only after step3 completes.




function stepOne(done){
    setTimeout(() => {
        done();
    }, 1000);
}

function stepTwo(done){
    setTimeout(() => {
        done();
    }, 1000);
}

function stepThree(done){
    setTimeout(() => {
        done();
    }, 1000);
}

stepOne(() => {
    stepTwo(() => {
        stepThree(() => {
            console.log("All steps finished");
        });
    });
});
