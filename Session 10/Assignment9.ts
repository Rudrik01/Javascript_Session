// Assignment 9: Access Modifiers
// Create a service class exposing only required public methods
// Keep internal data private
// Explain which members should be accessible and why
// Create a class with public, private, and protected members
// Try accessing them outside the class
// Which members should be exposed and why?

class Service {
  public serviceName: string = "Cleaning";
  private users: string[] = [];
  protected log(message: string) {
    console.log("Log ", message);
  }

  public addUser(name: string) {
    this.users.push(name);
    console.log(`${name} added to users`);
  }

  public getUsers(): string[] {
    return this.users;
  }
}



const service = new Service();


console.log(service.serviceName);


service.addUser("Rudrik"); 


// console.log(service.users);  Error: private
// service.log("test");         Error: protected