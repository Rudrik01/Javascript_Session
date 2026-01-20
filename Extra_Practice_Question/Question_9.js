// Exercise 9 – Email Masking

// Input: ["a@gmail.com","b@yahoo.com"]
// Task:

// Convert to ["a@***","b@***"]



const email=["a@gmail.com","b@yahoo.com"];

const maskedEmail=email.map((mail)=>{
    const parts=mail.split("@");
    mail=parts[0]+"@***";
    return mail;
});
console.log(maskedEmail);