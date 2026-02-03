// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

/*
Output Prediction: undefined
Explanation: In this code,we have an object user with a method printName that logs the name property of the object.When we assign the printName method to the variable print and call it,the this context inside the method no longer refers to the user object.Instead,it refers to the global context (or undefined in strict mode).Since there is no name property in the global context,the output will be undefined.
*/