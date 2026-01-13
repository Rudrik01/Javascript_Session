let input = prompt("Enter the number: ");
let number = Number(input);
if(number>0){
    console.log("Positive");
}
else if(number<0){
    console.log("Negative");

}
else if(number===0){
    console.log("Zero");
}
else{
    console.log("Invaild number");
}