// 27.pickFields
// Write a function named pickFields that receives 2 parameters:

// an object - data
// an Array of strings - fields
// The function should return a new object that contains all properties of data whose name is present in the fields array.

// Example 1
// Input
// data

// =
// {…}
// color: "blue"
// name: "Earth"
// solarSistem: "Milky Way"
// <prototype>: Object
// fields

// =
// Array(2)
// 0: "name"
// 1: "color"
// <prototype>: (0) [ ]
// Output
// {…}
// color: "blue"
// name: "Earth"
// <prototype>: Object
// Example 2
// Input
// data

// =
// {…}
// inventor: "Brendan Eich"
// name: "JavaScript"
// year: 1995
// <prototype>: Object
// fields

// =
// Array(3)
// 0: "job"
// 1: "age"
// 2: "name"
// <prototype>: (0) [ ]
// Output
// {…}
// name: "JavaScript"
// <prototype>: Object



function pickFields(data, fields) {
    const result={};
    fields.forEach((field)=>{
        if(!(field in result) && data[field]){
            result[field]=data[field];
        }
    });
    return result;
}

export { pickFields };
