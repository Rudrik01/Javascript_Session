const user = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};
const gre= user.greet;
console.log(gre()); // Output: undefined

/*
Use .bind() to fix the issue or we can use apply/call method to invoke the function with the correct context.
 */