// 🟠 PART 3: Deep Copy Thinking (No JSON)
// Q5. Manual Deep Copy (Prediction)
// const data = {
//   nums: [1, 2, { value: 3 }]
// };

// const copy = { ...data };
// copy.nums[2].value = 99;

// console.log(data.nums[2].value); // ?


// 👉 Explain reference flow.



const data = {
  nums: [1, 2, { value: 3 }]
};

const copy = { ...data };
copy.nums[2].value = 99;

console.log(data.nums[2].value); //99



/*
The explanation is that it is doing shallow copy so after copying the using spread operator.when the value object is created the key value 
stores the reference so on making shallow copy to copy the refrenced is copied so both point to the same location.

*/
