const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};
user.greet();



//As the function is arrow function, so by the use of this in arrow function will generate the error so it shows undefined.


// To fix the error we have to use normal function rather than arrow function 

const user = {
    name: "Alex",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
user.greet();



