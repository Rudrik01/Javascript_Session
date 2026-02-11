// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely

type Admin = {
  role: "admin";
  permissions: string[];
};
type Customer = {
  role: "customer";
  purchaseHistory: number[];
};
type Seller={
    role:"seller";
    order:number;
}
type User = Admin | Customer | Seller ;

function logUser(user: User) {
   if(user.role==="admin"){
    console.log(`Its Admin ${user.permissions}`);
   }else if(user.role==="customer"){
    console.log(`Its Customer ${user.purchaseHistory}`);
   }else{
    console.log(`Its Seller ${user.order}`);
   }
}


const admin:User={
    role:"admin",
    permissions:['read','write','delete']
}
const customer:User={
    role:"customer",
    purchaseHistory:[1,2,3]


}
const seller:User={
    role:"seller",
    order:2
}



logUser(admin);

logUser(customer);

logUser(seller);



/*

Observe how TypeScript prevents invalid property access
TypeScript stops you from accessing the wrong properties by using the role to understand what type of user it is. After checking the role, it only lets 
you use the properties that belong to that specific type. If you try to use a property that doesn’t exist for that user 
TypeScript shows an error right away. This helps find mistakes early and keeps the code safer and more reliable.
*/



// Create another union using two interfaces
interface Faculty{
    role:"faculty";
    department:string;
}
interface Student{
    role:"student";
    id:string;
}



type Education = Student | Faculty;






// Write a function that accepts the union and narrows the type safely


function logEducation(education:Education) {
   if(education.role==="faculty"){
    console.log(`Its Admin ${education.department}`);
   }else{
    console.log(`Its Customer ${education.id}`);
   }
}


const faculty:Education={
    role:"faculty",
    department:"CSE"
}
const student:Education={
    role:"student",
    id:"22CS063",


}


logEducation(faculty);
logEducation(student);