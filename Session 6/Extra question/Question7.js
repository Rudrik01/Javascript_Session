// Q7 – Output Order
// <div id="parent">
//   <button id="child">Click</button>
// </div>

// parent.addEventListener("click", () => console.log("Parent"));
// child.addEventListener("click", () => console.log("Child"));


// Task

// Predict output order

// Explain bubbling


parent.addEventListener("click", () => console.log("Parent"));
child.addEventListener("click", () => console.log("Child"));


/*

Output Order Prediction:
When the button with id "child" is clicked, the output order will be:
Child
Parent
Q)Explain bubbling
-->Event bubbling is a mechanism in the DOM where an event starts from the deepest target element and then propagates upwards through its ancestors. In this case, when the "child" button is clicked, the click event first triggers the event listener attached to the "child" button, logging "Child". After that, the event bubbles up to the "parent" div, triggering its event listener and logging "Parent". This is why we see "Child" logged before "Parent" in the output.

*/
