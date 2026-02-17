// ✅ Q8 — Static vs Instance

// Create:

// class Employee


// Requirements:

// ✔ static employeeCount
// ✔ increment inside constructor
// ✔ method to get total employees

// 👉 This is a VERY common exam trap.




class Employee{
    static employeeCount=0;


    constructor(){
        Employee.employeeCount++;
    }
    static get(){
        return Employee.employeeCount;
    }
}

const emp1=new Employee();
const emp2=new Employee();
const emp3=new Employee();

console.log(Employee.get());