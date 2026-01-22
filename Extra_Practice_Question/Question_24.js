// Q4. Spread Operator Confusion
// const state = {
//   user: { name: "Alex" },
//   loggedIn: true
// };

// const newState = { ...state };

// newState.user.name = "Sam";

// console.log(state.user.name); // ?


// 👉 Why is this still unsafe?



const state = {
  user: { name: "Alex" },
  loggedIn: true
};

const newState = { ...state };

newState.user.name = "Sam";

console.log(state.user.name); // Sam

/*
The explanation is that it is doing shallow copy so after copying the using spread operator.when the state object is created the key user 
stores the reference so on making shallow copy to newState the refrenced is copied so both point to the same location.

*/
