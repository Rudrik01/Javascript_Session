// Exercise 18 – Student Result System

// Input:

// [
//  {name:"A", marks:30},
//  {name:"B", marks:80},
//  {name:"C", marks:50}
// ]


// Task:

// Filter pass ≥40

// Add field grade (A/B/C) using map

// Reduce to count how many passed


const input=[
 {name:"A", marks:30},
 {name:"B", marks:80},
 {name:"C", marks:50}
]


const pass=input.filter((student)=>{
    if(student.marks>=40){
        return student;
    }


});

const gradedResult=pass.map((student)=>{
    let grade='C';
    if(student.marks>=80){
        grade='A';
    }
    else if(student.marks>=60){
        grade='B';
    }
    return {...input,grade:grade};
    
});

const passed=gradedResult.reduce((acc,student)=>{
    return acc+1;
},0)

console.log(gradedResult);
console.log(pass);

console.log(passed);

