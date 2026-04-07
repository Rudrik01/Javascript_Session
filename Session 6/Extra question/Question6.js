// Q6 – Coding Task: Fix this
// const user = {
//   name: "Alex",
//   init() {
//     btn.addEventListener("click", function () {
//       console.log(this.name);
//     });
//   }
// };
// user.init();


// Task

// Fix the code so clicking the button prints "Alex"

// Explain why it was broken


const user = {
  name: "Alex",
  init() {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
      console.log(this.name);
    });
  }
};
user.init();
