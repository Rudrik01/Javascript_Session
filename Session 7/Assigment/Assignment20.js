// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

/*
Expected Output: Sarah
Explanation: In this code, we define a class Manager with a constructor that initializes the name property. The print method is defined as an arrow function, which means it captures the this context of the surrounding lexical scope (the instance of the Manager class). When we create an instance of Manager named m and assign its print method to the variable p, calling p() still retains the correct this context, allowing it to access the name property of the Manager instance. Therefore, when we call p(), it logs "Sarah" to the console.
*/