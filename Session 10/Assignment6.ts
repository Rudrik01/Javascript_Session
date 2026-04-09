// Assignment 6: Interfaces
// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
// Write a function that accepts BaseUser
// Pass both Admin and Customer objects to the function
// Design an interface for an API response object
// Create a function that accepts this interface as a parameter
// Extend the interface and reuse it
// Create an interface for a Product
// Create a variable that follows this interface

interface User {
  id: number;
  name: string;
}

interface BaseUser {
  id: number;
  email: string;
}

interface Customer extends BaseUser {
  role: "customer";
  purchaseHistory: number[];
}
interface Admin extends BaseUser {
  role: "admin";
  permissions: string[];
}

// type AppUser = Admin | Customer;
// function isAdmin(user:AppUser){
//   return user.role==="admin";
// }

function task(user:BaseUser){
   
      console.log(`Its a  ${user.id}, ${user.email}`);
   
    
}

const admin:Admin={
  role:"admin",
  permissions:["read","Write","Execute"],
  id:1,
  email:"xyz@gmail.com"
};


const customer:Customer={
  role:"customer",
  purchaseHistory:[1,2,3],
  id:2,
  email:"customer@gmail.com"
};


task(admin);
task(customer);


interface ApiResponse{
  statusCode:number;
  message: string;
}

function ApiProcessor(api:ApiResponse){
  console.log(`API Status Code: ${api.statusCode}, Api Data: ${api.message}`);
}


interface UserResponse extends ApiResponse {
  data: {
    id: number;
    name: string;
  };
}


const userRes: UserResponse = {
  statusCode: 200,
  message: "Success",
  data: {
    id: 1,
    name: "Alex"
  }
};


ApiProcessor(userRes); // works because it extends ApiResponse


interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}



const laptop: Product = {
  id: 101,
  name: "Laptop",
  price: 75000,
  inStock: true
};
