// 28.getHighestPaidEmployee
// Write a function named getHighestPaidEmployee that receives 2 parameters:

// employees - an Array of objects representing employees of a company. Each has the following properties

// name - a string representing the name of the employee
// departmentId - a string representing the ID of the department the employee works in
// salary - a number representing the salary of the employee, per month
// departmentId - a string representing the ID of a department

// The function should return the name of the employee with the highest salary in the specified department. If no employee exists in that department return undefined.

// Example 1
// Input
// employees

// =
// Array(4)
// 0: { departmentId: "A110", name: "Alice", salary: 7611 }
// 1: { departmentId: "A110", name: "Bob", salary: 9288 }
// 2: { departmentId: "A504", name: "Charlie", salary: 4109 }
// 3: { departmentId: "A504", name: "David", salary: 6100 }
// <prototype>: (0) [ ]
// departmentId

// =
// "A504"
// Output
// "David"



function getHighestPaidEmployee(employees, departmentId) {
    let salary=-Infinity;
    let result=employees.reduce((acc,curr)=>{
        if(curr.departmentId==departmentId){
            if(salary<curr.salary){
                salary=curr.salary;
                acc=curr.name;
            }
        }
        return acc;
    },undefined);
    return result;

   
}

export { getHighestPaidEmployee };
