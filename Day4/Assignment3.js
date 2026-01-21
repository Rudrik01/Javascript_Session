// 3. Predict the result of the following execution.
// function SmartPhone(brand) {
//   this.brand = brand;
  
//   return {
//     brand: "Generic",
//     os: "Android"
//   };
// }

// SmartPhone.prototype.getBrand = function() {
//   return this.brand;
// };

// const myPhone = new SmartPhone("Apple");

// console.log(myPhone.brand);    // ?
// console.log(myPhone.getBrand); // ?



function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");
console.log(myPhone);

console.log(myPhone.brand);    // Generic 
console.log(myPhone.getBrand); // undefined

/*
    The output of line 38 is "Generic".By default when a constructor is called  js do 3 things it creates a new empty object say this object and links to
    SmartPhone.prototype and return this automatically at the end but at here the constuctor is explicilty returning an object.So when the  line 35 is executed
    SmartPhone constructor is called with argument "Apple". In the constructor this.brand = brand means brand="Apple" but in the next very line at 25 an object is returned so 
    it overrides the brand="Apple" to brand="Generic"


    The output of line 39 is "Undefined". Because myPhone is that a plain object where we return at line 25 so it is not linked to SmartPhone.prototype.Infact it is linked to Object.prototype.
    So it has no connection to getBrand.

*/





