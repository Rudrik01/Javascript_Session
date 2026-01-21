// Exercise 17 – Update Nested Object

// Input:

// const profile = {
//   name:"Sam",
//   address:{ city:"Delhi" }
// }


// Task:

// Change city to Mumbai immutably


const profile = {
  name:"Sam",
  address:{ city:"Delhi" }
}

profile.address.city="Mumbai";
console.log(profile);