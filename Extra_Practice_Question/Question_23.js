// 🟡 PART 2: Shallow Copy Pitfalls
// Q3. Predict & Explain
// const config = {
//   mode: "dark",
//   options: {
//     debug: true
//   }
// };

// const copy = Object.assign({}, config);

// copy.options.debug = false;

// console.log(config.options.debug); // ?
// console.log(copy.options.debug);   // ?


// 👉 Explain why Object.assign fails here



const config = {
  mode: "dark",
  options: {
    debug: true
  }
};

const copy = Object.assign({}, config);

copy.options.debug = false;

console.log(config.options.debug); // false
console.log(copy.options.debug);   // false


/*
the object config has options variable which stores the reference of array of heap not the actual data at line number 29 Object.assign
is used for shallow copy of the config object.so a new object is created but the catch is that the options variable has the reference of array
so the referenced is copied and stored in the new object also. means both of them points the same address location.Therefore change in anyone of them will
be reflected in the both.


*/