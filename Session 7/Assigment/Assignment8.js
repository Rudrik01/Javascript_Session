// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();


/*
Output Prediction: undefined
Explanation: In this code, we have an object group with a property title and a method getTitle defined as an arrow function. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical scope. In this case, the surrounding scope is the global context, where this.title is undefined. Therefore, when we call group.getTitle(), it logs undefined to the console.
 */