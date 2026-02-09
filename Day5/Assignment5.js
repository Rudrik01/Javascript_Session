//  Write a function downloadFile(url, callback) that simulates a 3-second delay using setTimeout.
// After the delay, log "Download complete: [url]" and execute the callback function.

function d(u, c){
    setTimeout(() => {
        console.log(`Download complete: ${u}`);
        c();
    }, 3000);
}

d("https:github/rudrik01/", () => {
    console.log("Start download");
});

