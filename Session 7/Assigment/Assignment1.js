// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);


/*
Output Prediction: Dell
Explanation: In this code,the getBrand method is called as a method of the laptop object at line number myBrand. The getBrand method return the brand name using this.brand
property.At the time of invocation this refers to the laptop object, so this.brand evaluates to "Dell".

*/
