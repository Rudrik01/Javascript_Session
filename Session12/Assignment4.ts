// Assignment 4
// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .

abstract class Service<T>{
   abstract execute():T
}
interface User{
    id:number,
    name:string
}
class UserService extends Service<User>{
    private user:User;
    constructor(user:User){
        super();
        this.user=user;
    }
    execute():User{
        return this.user;
        
    }
}