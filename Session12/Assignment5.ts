// Assignment 5
// Create a constructor type for UserRepository .
// Create a callable type that formats User name.

type Constructor<T> =new (...arg:any[])=>T; 

interface User{
    id:number,
    name:string
}
class UserRepository{
  getUser(): User{
    return { id:1, name:"Rudrik" };
  }
}

function createInstance<T>(Con: Constructor<T>):T{
  return new Con();
}
type FormatUserName = (user: User) => string;
const formatUserName: FormatUserName = (user) => {
  return `User Name: ${user.name}`;
};