// Q1 – Output Prediction
// <div id="container">
//   <p class="msg">Hello</p>
//   <p class="msg">World</p>
// </div>

// const el = document.querySelector(".msg");
// console.log(el.textContent); // ?


// Task

// Predict output

// Explain why only one element is selected

// Name one selector that would select both elements


<div id="container">
  <p class="msg">Hello</p>
  <p class="msg">World</p>
</div>

const el = document.querySelector(".msg");
console.log(el.textContent); // ?



//Output Prediction: Hello


/*
Q1)Explain why only one element is selected?
-->As document.querySelector() method returns the first element that matches a specified css selector(s) in the document. In this case, it selects the first <p> element with the class "msg", which contains the text "Hello".

Q2)Name one selector that would select both elements?
-->To select both elements, we can use document.querySelectorAll(".msg"), which returns a NodeList of all elements matching the specified selector.

*/