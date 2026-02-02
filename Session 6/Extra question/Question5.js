// Q5 – Output Prediction
// btn.addEventListener("click", function () {
//   console.log(this);
// });


// Task

// What does this refer to?

// Why?


btn.addEventListener("click", function () {
  console.log(this);
});


/*
Q)What does this refer to?
-->In this context, "this" refers to the button element (btn) that the event listener is attached to. When the button is clicked, the function is executed in the context of the button, so "this" points to that specific button element.
Q)Why?
-->In JavaScript, when a regular function (not an arrow function) is used as an event handler, "this" inside that function refers to the element that received the event. In this case, since the event listener is attached to the button (btn), "this" refers to that button when the click event occurs.

*/