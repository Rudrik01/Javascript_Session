// Exercise 2 – Extract Domain

// Input: "user@gmail.com"
// Task:

// Extract only "gmail" using string methods
// Expected Output: "gmail"



    var email="user@gmail.com";

    const parts=email.split('@');

    const domain_full=parts[1];
    const domain_part=domain_full.split('.');
    const domain=domain_part[0];
    console.log(domain);