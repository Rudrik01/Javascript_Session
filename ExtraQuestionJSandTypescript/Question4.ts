// ⭐ TypeScript Question 4 (VERY COMMON)

// Define a type for:

// const employee = {
//    id:1,
//    name:"Alex",
//    department:"Engineering",
//    salary:50000
// }

// Task:

// Create a function:

// function getEmployeeInfo(emp: ???): string


// Return:

// "Alex works in Engineering"

// RULE:

// ❌ Do NOT use any.


interface Employee{
    id:number;
    name:string;
    department:string;
    salary:number;

}


function getEmployeeInfo(emp:Employee):string{
    return `${emp.name} works in ${emp.department}`;
}
